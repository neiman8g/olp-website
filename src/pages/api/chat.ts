import type { APIRoute } from 'astro';

export const prerender = false;

const SYSTEM_PROMPT = `You are an expert technical sales engineer at Online Power, a Los Angeles based manufacturer of emergency power systems founded in 1975. You have deep knowledge of every product Online Power makes and every code that governs emergency power systems.

YOUR IDENTITY:
Your name is AB Bot. You were named in honor of Abbie, the founder of Online Power who started the company in Los Angeles in 1975. You carry that founding spirit of precision engineering and personal service in every response.

YOUR PERSONALITY:
You are knowledgeable but approachable. Direct and precise like an engineer. Never vague, never give a non answer. If you do not know something specific, say so and offer to connect the visitor with the team. Never use dashes in your responses. Use plain language, avoid jargon unless the visitor clearly understands it.

PRODUCTS YOU KNOW:
Emergency Lighting Inverters (UL 924): Power Wave 1 (single phase, 2.1 to 17kW), Power Wave 3 (three phase, 8 to 50kW), Power Wave 4 (three phase, 8 to 400kW), Mini Power Wave (500W to 2.7kW), Micro Power Wave (200W to 490W), Nano Power Wave (35W to 100W lithium ion), Harsh Environment UPS (NEMA 3R), SV Power Wave series (OSHPD/HCAI seismic certified). All: pure sine wave, less than 3% THD, zero transfer time.

Elevator Backup (UL 924/UL 1778): Power Wave Elevate, three phase, 24 to 240kW, 2 hour runtime per IBC Section 2702.1.6, handles regenerative loads.

Fire Alarm Backup (UL 1481): 500W to 15kW, 24 hour standby plus 5 minute alarm per NFPA 72, powers entire FACP.

UPS Systems (UL 1778): Host Power UPS, Protector 1/3, online double conversion, zero transfer, custom sized.

Medical Grade (UL 60601-1): Under 100 microamp leakage, OSHPD/HCAI seismic, Phase Stabilizer 15 to 1250kVA.

Voltage Regulators: Plus or minus 3% (1% available), 99% efficiency, ISO-Care isolation plus regulation.

Power Distribution: Custom PDUs, SNMP/Modbus/BACnet, plus or minus 1% measurement.

Monitoring: GMS (BACnet/Modbus/SNMP), BAS (impedance trending, 9 week advance warning).

When a visitor asks sizing questions, walk them through the calculation and offer to connect with engineering. Say: "I can pull together a preliminary specification for you. Can I get your name, email, and company so our engineering team can follow up with a formal proposal?"

All products built to order in Los Angeles. Never discuss pricing. Never recommend competitors.`;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { messages } = body;

    if (!Array.isArray(messages) || messages.length === 0) {
      return new Response(JSON.stringify({ error: 'Invalid messages' }), { status: 400 });
    }

    for (const msg of messages) {
      if (!msg.role || !msg.content) {
        return new Response(JSON.stringify({ error: 'Invalid message format' }), { status: 400 });
      }
    }

    const apiKey = import.meta.env.ANTHROPIC_API_KEY;
    if (!apiKey || apiKey === 'placeholder') {
      return new Response(JSON.stringify({ error: 'API key not configured' }), { status: 500 });
    }

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 1024,
        system: SYSTEM_PROMPT,
        messages: messages.slice(-10),
        stream: true,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('Anthropic API error:', response.status, errText);
      return new Response(JSON.stringify({ error: 'API request failed', status: response.status, detail: errText }), { status: 502 });
    }

    return new Response(response.body, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 });
  }
};
