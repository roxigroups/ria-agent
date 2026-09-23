export interface FAQItem {
  id: number;
  section: string;
  sectionTitle: string;
  question: string;
  answer: string;
  status?: 'live' | 'roadmap' | 'general';
  extraContent?: {
    type: 'guardrails' | 'workflow' | 'callout';
    title?: string;
    items?: string[];
    text?: string;
  };
}

export const FAQ_SECTIONS = [
  { id: 'all', label: 'All Questions (60)' },
  { id: 'live', label: '● Live Today' },
  { id: 'A', label: 'A. Understanding RIA' },
  { id: 'B', label: 'B. Platform & Agents' },
  { id: 'C', label: 'C. Orders & Fulfilment' },
  { id: 'D', label: 'D. Collections & Payments' },
  { id: 'E', label: 'E. Feedback & Complaints' },
  { id: 'F', label: 'F. Retailer Intelligence' },
  { id: 'G', label: 'G. Retailer Call Experience' },
  { id: 'H', label: 'H. Data, Software & Telephony' },
  { id: 'I', label: 'I. Roles, Access & Control' },
  { id: 'J', label: 'J. Security & AI Guardrails' },
  { id: 'K', label: 'K. Rollout & Roadmap' },
  { id: 'L', label: 'L. Commercials & Pilot' },
];

export const FAQ_DATA: FAQItem[] = [
  // A. Understanding RIA
  {
    id: 1,
    section: 'A',
    sectionTitle: 'A. Understanding RIA',
    question: 'What is RIA?',
    answer:
      'RIA — the Roxy Intelligent AI Agent — is a Distribution Intelligence Platform for distributor–retailer communication. It uses AI agents to automate routine conversations, capture structured business outcomes and progressively turn retailer interactions into actionable distribution intelligence.',
    status: 'general',
  },
  {
    id: 2,
    section: 'A',
    sectionTitle: 'A. Understanding RIA',
    question: 'What does “Distribution Intelligence” actually mean?',
    answer:
      'Distribution Intelligence means turning retailer interactions into structured business signals. RIA combines AI agents that communicate with retailers with an intelligence layer designed to understand order, payment and interaction patterns. The objective is not only to automate communication, but to help distributors understand what is happening across their retailer network.',
    status: 'general',
  },
  {
    id: 3,
    section: 'A',
    sectionTitle: 'A. Understanding RIA',
    question: 'What problem is RIA built to solve?',
    answer:
      'As retailer networks grow, distributors need to manage increasing volumes of orders, collections and follow-ups. Manual processes can become difficult to scale consistently and can make it harder to maintain structured visibility across every interaction. RIA is designed to provide technology capacity for repetitive communication and follow-up workflows.',
    status: 'general',
  },
  {
    id: 4,
    section: 'A',
    sectionTitle: 'A. Understanding RIA',
    question: 'Is RIA a single product or a platform?',
    answer:
      'It is a platform, delivered as AI “agents” and modules on a common core. Each agent handles one type of conversation, and all of them are designed to share the same retailer data, the same intelligence and the same records.',
    status: 'general',
  },
  {
    id: 5,
    section: 'A',
    sectionTitle: 'A. Understanding RIA',
    question: 'Is RIA a chatbot or an auto-dialer?',
    answer:
      'No. RIA is an AI agent platform, not simply a chatbot or auto-dialer. An RIA agent can be configured with a business objective, conduct a conversation, understand the response, follow permitted rules and convert the outcome into structured business information.',
    status: 'general',
    extraContent: {
      type: 'callout',
      title: 'What RIA is not',
      text: 'RIA is not simply an auto-dialer, IVR, chatbot or recorded-message system. It is designed as a conversational AI agent platform where business objectives, conversations, rules, outcomes and structured data work together.',
    },
  },
  {
    id: 6,
    section: 'A',
    sectionTitle: 'A. Understanding RIA',
    question: 'Who built RIA?',
    answer:
      'RIA is a Roxy Group platform, developed with Arohana Intellectual Solutions as the technology partner. It has been developed from real distribution workflows and use cases within the Roxy Group.',
    status: 'general',
  },
  {
    id: 7,
    section: 'A',
    sectionTitle: 'A. Understanding RIA',
    question: 'Which businesses is RIA meant for?',
    answer:
      'Distributors, stockists and wholesalers who service a large number of retailers — across FMCG, pharma, auto parts, electrical, agri-inputs and similar sectors that depend on regular follow-up.',
    status: 'general',
  },

  // B. RIA platform & agents
  {
    id: 8,
    section: 'B',
    sectionTitle: 'B. RIA platform & agents',
    question: 'What can RIA do across a whole distribution business?',
    answer:
      'RIA is being developed as a modular platform. The Collection Agent is currently live for retailer payment follow-up. The broader platform roadmap includes order conversations, picklist generation, feedback, retailer communication and distribution intelligence capabilities, released progressively in phases.',
    status: 'general',
  },
  {
    id: 9,
    section: 'B',
    sectionTitle: 'B. RIA platform & agents',
    question: 'What are the RIA “agents”?',
    answer:
      'RIA is built around a common Agent Core. Business-specific agents can be configured on this core — for example, the Collection Agent for payment follow-up and future agents for orders, feedback or retailer communication. The objective is to have different agents operate on a common platform and structured data foundation.',
    status: 'general',
  },
  {
    id: 10,
    section: 'B',
    sectionTitle: 'B. RIA platform & agents',
    question: 'Which module is live right now?',
    answer:
      'The RIA Collection Agent. It is in active use, and the other modules are being released in phases on the same platform.',
    status: 'live',
  },
  {
    id: 11,
    section: 'B',
    sectionTitle: 'B. RIA platform & agents',
    question: 'How do the modules fit together?',
    answer:
      'RIA is designed around a common platform and data foundation so that agents can use shared retailer records and structured outcomes. As additional modules are released, their interactions can feed into the same intelligence layer and dashboards.',
    status: 'general',
  },
  {
    id: 12,
    section: 'B',
    sectionTitle: 'B. RIA platform & agents',
    question: 'Is the goal to run the full order-to-payment cycle?',
    answer:
      'Yes. The vision is an intelligent flow — order taking, warehouse picklist, delivery feedback, collection follow-up, and behaviour intelligence — delivered module by module.',
    status: 'roadmap',
  },

  // C. Orders & fulfilment
  {
    id: 13,
    section: 'C',
    sectionTitle: 'C. Orders & fulfilment',
    question: 'Can RIA take orders from retailers?',
    answer:
      'As part of the planned RIA platform rollout, RIA can capture orders from retailers through a conversation and pass them into your order flow, reducing manual order entry.',
    status: 'roadmap',
  },
  {
    id: 14,
    section: 'C',
    sectionTitle: 'C. Orders & fulfilment',
    question: 'What is a picklist, and how does RIA help?',
    answer:
      'A picklist is the consolidated list your warehouse uses to pick and pack goods. As part of the planned platform rollout, RIA is designed to generate it directly from captured orders, cutting re-typing and picking errors.',
    status: 'roadmap',
  },
  {
    id: 15,
    section: 'C',
    sectionTitle: 'C. Orders & fulfilment',
    question: 'Can RIA make an order conversation more relevant?',
    answer:
      'As part of the planned platform rollout, RIA can use order behaviour to highlight likely requirements — for example an item a retailer is due to reorder or usually buys — so the order conversation is timely rather than generic.',
    status: 'roadmap',
  },

  // D. Collections & payments — the live module
  {
    id: 16,
    section: 'D',
    sectionTitle: 'D. Collections & payments — the live module',
    question: 'What exactly does the Collection Agent do?',
    answer:
      'This is the currently live RIA module. The Collection Agent calls your retailers on a schedule, within business hours, about outstanding payments. It registers a promise-to-pay with a date, captures any claim or dispute the retailer raises, and records the outcome as structured data with the next action.',
    status: 'live',
    extraContent: {
      type: 'workflow',
      title: 'Collection Agent Workflow',
      items: ['Prioritise', 'Call', 'Understand', 'Capture', 'Schedule', 'Follow up'],
    },
  },
  {
    id: 17,
    section: 'D',
    sectionTitle: 'D. Collections & payments — the live module',
    question: 'How does RIA decide which retailers to call?',
    answer:
      'The Collection Agent uses the priority rules configured for the distributor — such as outstanding amount, invoice ageing and previous commitments — to determine the sequence of follow-ups.',
    status: 'live',
  },
  {
    id: 18,
    section: 'D',
    sectionTitle: 'D. Collections & payments — the live module',
    question: 'What is a “promise to pay” and how is it recorded?',
    answer:
      'It is the retailer’s commitment — an amount, a date and often a reason. RIA captures all of it as structured information and schedules the follow-up automatically, instead of leaving it in a call recording or a diary.',
    status: 'live',
  },
  {
    id: 19,
    section: 'D',
    sectionTitle: 'D. Collections & payments — the live module',
    question: 'Can RIA handle partial payments or multiple commitments?',
    answer:
      'Yes. If a retailer offers part now and the balance later, RIA records both the part payment and the balance date and sets a reminder for each, subject to the configured workflow and permissions.',
    status: 'live',
  },
  {
    id: 20,
    section: 'D',
    sectionTitle: 'D. Collections & payments — the live module',
    question: 'Does RIA chase retailers aggressively?',
    answer:
      'No. RIA stays polite and firm on the facts, never threatens or pressures, respects calling hours, and honours an opt-out immediately. The aim is a respectful reminder, not harassment.',
    status: 'live',
  },
  {
    id: 21,
    section: 'D',
    sectionTitle: 'D. Collections & payments — the live module',
    question: 'What kinds of outcomes can RIA capture on a call?',
    answer:
      'Promise-to-pay, callback requested, payment-already-made (for verification), dispute, goods or invoice issue, refusal, opt-out, no-answer or busy, and escalation to your team — each recorded as a clear outcome.',
    status: 'live',
  },

  // E. Feedback, complaints & communication
  {
    id: 22,
    section: 'E',
    sectionTitle: 'E. Feedback, complaints & communication',
    question: 'Can RIA make feedback calls after delivery?',
    answer:
      'Feedback calling is part of the platform — RIA is designed to call retailers after delivery and capture their feedback as structured data.',
    status: 'roadmap',
  },
  {
    id: 23,
    section: 'E',
    sectionTitle: 'E. Feedback, complaints & communication',
    question: 'Can RIA handle complaints or claims?',
    answer:
      'During a collection call, RIA can capture a complaint or claim with full context and route it to your team. It does not judge or settle disputes itself — those go to a human, with the conversation already attached.',
    status: 'live',
  },
  {
    id: 24,
    section: 'E',
    sectionTitle: 'E. Feedback, complaints & communication',
    question: 'Can RIA communicate schemes or new products?',
    answer:
      'Scheme and new-product communication to retailers is part of the platform’s retailer-communication scope.',
    status: 'roadmap',
  },

  // F. Retailer intelligence & behaviour signals
  {
    id: 25,
    section: 'F',
    sectionTitle: 'F. Retailer intelligence & behaviour signals',
    question: 'What is “retailer order behaviour”?',
    answer:
      'RIA is designed to identify patterns in what and how frequently a retailer orders, such as changes in ordering frequency or product demand.',
    status: 'roadmap',
  },
  {
    id: 26,
    section: 'F',
    sectionTitle: 'F. Retailer intelligence & behaviour signals',
    question: 'What is “payment behaviour”?',
    answer:
      'RIA is designed to analyse payment patterns such as payment timing, ageing and changes in payment behaviour.',
    status: 'roadmap',
  },
  {
    id: 27,
    section: 'F',
    sectionTitle: 'F. Retailer intelligence & behaviour signals',
    question: 'Can RIA identify early signs of retailer risk?',
    answer:
      'RIA is designed to identify behavioural signals that may indicate increasing payment or ordering risk and surface them for human action. These are early-warning signals, not guaranteed predictions.',
    status: 'roadmap',
  },
  {
    id: 28,
    section: 'F',
    sectionTitle: 'F. Retailer intelligence & behaviour signals',
    question: 'Can RIA help prioritise accounts?',
    answer:
      'RIA is designed to combine configured business rules with retailer behaviour signals to recommend which accounts may require attention first.',
    status: 'roadmap',
  },
  {
    id: 29,
    section: 'F',
    sectionTitle: 'F. Retailer intelligence & behaviour signals',
    question: 'Does RIA provide a central dashboard?',
    answer:
      'Call outcomes and structured follow-up information can be presented through a central view. Additional intelligence dashboards will expand as further platform modules are released.',
    status: 'general',
  },

  // G. The retailer call experience
  {
    id: 30,
    section: 'G',
    sectionTitle: 'G. The retailer call experience',
    question: 'Will retailers know they are speaking to an AI?',
    answer:
      'Yes. RIA identifies itself as an AI agent at the beginning of the call and discloses when the call may be recorded.',
    status: 'live',
  },
  {
    id: 31,
    section: 'G',
    sectionTitle: 'G. The retailer call experience',
    question: 'Which languages can RIA speak?',
    answer:
      'RIA currently supports English, Hindi and Telugu. Additional languages can be introduced as the platform expands.',
    status: 'live',
  },
  {
    id: 32,
    section: 'G',
    sectionTitle: 'G. The retailer call experience',
    question: 'When does RIA call?',
    answer:
      'Only within business calling hours, and it honours festival and holiday suspension, so retailers are not disturbed at inappropriate times.',
    status: 'live',
  },
  {
    id: 33,
    section: 'G',
    sectionTitle: 'G. The retailer call experience',
    question: 'What if a retailer does not answer?',
    answer:
      'RIA reschedules and tries again within the allowed hours, and logs each attempt — so no follow-up is quietly dropped.',
    status: 'live',
  },
  {
    id: 34,
    section: 'G',
    sectionTitle: 'G. The retailer call experience',
    question: 'What if a retailer is upset or asks not to be called?',
    answer:
      'RIA apologises, does not argue, and offers one convenient time instead of calling repeatedly. If the retailer asks not to be contacted, RIA stops immediately.',
    status: 'live',
  },
  {
    id: 35,
    section: 'G',
    sectionTitle: 'G. The retailer call experience',
    question: 'What if a retailer disputes the amount?',
    answer:
      'RIA never argues about a disputed amount. It records the issue with context and routes it to your team to resolve.',
    status: 'live',
  },
  {
    id: 36,
    section: 'G',
    sectionTitle: 'G. The retailer call experience',
    question: 'What if a retailer says they have already paid?',
    answer:
      'RIA never insists the amount is unpaid. It notes the payment date or reference and routes it to your team for verification.',
    status: 'live',
  },
  {
    id: 37,
    section: 'G',
    sectionTitle: 'G. The retailer call experience',
    question: 'What if a retailer asks something RIA cannot answer?',
    answer:
      'RIA does not guess. It records the question and has the right team member address it, so the retailer always gets accurate information.',
    status: 'live',
  },

  // H. Data, software & telephony
  {
    id: 38,
    section: 'H',
    sectionTitle: 'H. Data, software & telephony',
    question: 'Do we have to change our ERP or accounting software?',
    answer:
      'No. RIA is designed to work with your existing systems. The current Collection Agent can work from structured data exports from systems such as Tally, Marg or Busy. Deeper live integrations are planned as the platform expands. No ERP replacement required.',
    status: 'live',
  },
  {
    id: 39,
    section: 'H',
    sectionTitle: 'H. Data, software & telephony',
    question: 'What data does RIA need?',
    answer:
      'For collections, RIA typically needs retailer name, contact number, outstanding amount, invoice ageing and relevant previous commitments. Other agents will require the data relevant to their workflow.',
    status: 'general',
  },
  {
    id: 40,
    section: 'H',
    sectionTitle: 'H. Data, software & telephony',
    question: 'How does RIA actually make the calls?',
    answer:
      'RIA uses a configurable telephony layer that connects the AI agent to the required calling infrastructure.',
    status: 'general',
  },
  {
    id: 41,
    section: 'H',
    sectionTitle: 'H. Data, software & telephony',
    question: 'Does RIA use WhatsApp or only voice?',
    answer:
      'Voice calling is the core of RIA. Complementary channels such as WhatsApp are part of the broader plan, mainly for opening and continuing conversations alongside calls.',
    status: 'roadmap',
  },
  {
    id: 42,
    section: 'H',
    sectionTitle: 'H. Data, software & telephony',
    question: 'Can RIA integrate live with our systems later?',
    answer:
      'Yes. Deeper, live integration is on the roadmap; today the platform runs on data exports, so you can start without changing your systems.',
    status: 'roadmap',
  },

  // I. Roles, access & control
  {
    id: 43,
    section: 'I',
    sectionTitle: 'I. Roles, access & control',
    question: 'Who on my team uses RIA?',
    answer:
      'RIA is designed for role-based access, so different people — owners, accounts, sales, managers — can see and do what is relevant to their role. Full role-based access is expanding as platform modules are released.',
    status: 'roadmap',
  },
  {
    id: 44,
    section: 'I',
    sectionTitle: 'I. Roles, access & control',
    question: 'Can I control what RIA is allowed to do?',
    answer:
      'Yes. RIA acts only within the rules and permissions your business configures. It does not take actions outside those rules.',
    status: 'live',
  },
  {
    id: 45,
    section: 'I',
    sectionTitle: 'I. Roles, access & control',
    question: 'Can I see what happened on every call?',
    answer:
      'Yes. Every call is recorded as a structured outcome with the next action, so your team has a clear history of what was said and agreed.',
    status: 'live',
  },

  // J. Security, privacy & AI guardrails
  {
    id: 46,
    section: 'J',
    sectionTitle: 'J. Security, privacy & AI guardrails',
    question: 'Are the calls recorded, and is that disclosed?',
    answer:
      'Yes. RIA discloses at the start of every call that it is an AI call and that it may be recorded.',
    status: 'live',
  },
  {
    id: 47,
    section: 'J',
    sectionTitle: 'J. Security, privacy & AI guardrails',
    question: 'What about data privacy?',
    answer:
      'RIA is designed to operate within calling hours, honour opt-out requests, and avoid disclosing a retailer’s dues to unauthorised persons. The detailed terms of data handling are set out in RIA’s privacy and service documentation.',
    status: 'general',
  },
  {
    id: 48,
    section: 'J',
    sectionTitle: 'J. Security, privacy & AI guardrails',
    question: 'Who owns the data?',
    answer:
      'Your distribution data remains yours. The specific terms of data ownership, retention and processing are set out in RIA’s service and privacy documentation.',
    status: 'general',
  },
  {
    id: 49,
    section: 'J',
    sectionTitle: 'J. Security, privacy & AI guardrails',
    question: 'Will RIA share our retailers’ information with anyone?',
    answer:
      'RIA is designed not to disclose retailer information to unauthorised persons, and your data is used to operate the services you configure rather than sold to others. Hosting and sub-processor details are covered in RIA’s privacy documentation.',
    status: 'general',
  },
  {
    id: 50,
    section: 'J',
    sectionTitle: 'J. Security, privacy & AI guardrails',
    question: 'Will RIA waive an amount or give a discount on its own?',
    answer:
      'No. RIA never changes an amount, waives dues or offers a discount by itself. It follows only your configured rules; anything beyond that goes to your team.',
    status: 'general',
  },
  {
    id: 51,
    section: 'J',
    sectionTitle: 'J. Security, privacy & AI guardrails',
    question: 'What guardrails does RIA always follow?',
    answer:
      'RIA adheres strictly to nine core operational and ethical AI guardrails across every customer conversation:',
    status: 'general',
    extraContent: {
      type: 'guardrails',
      title: 'RIA’s Core AI Guardrails',
      items: [
        '1. Disclose AI interaction.',
        '2. Disclose recording where applicable.',
        '3. Respect calling hours.',
        '4. Honour opt-out.',
        '5. Never expose unauthorised dues.',
        '6. Never argue disputed amounts.',
        '7. Never pressure or threaten.',
        '8. Never invent information.',
        '9. Never exceed configured permissions.',
      ],
    },
  },

  // K. Rollout & roadmap
  {
    id: 52,
    section: 'K',
    sectionTitle: 'K. Rollout & roadmap',
    question: 'How is RIA being rolled out?',
    answer:
      'In phases. The Collection Agent is live today, and further modules — orders and picklists, feedback, and the wider intelligence — are being released on the same platform over time.',
    status: 'general',
  },
  {
    id: 53,
    section: 'K',
    sectionTitle: 'K. Rollout & roadmap',
    question: 'What are the broad phases?',
    answer:
      'Planned expansion. An initial phase focused on launch and the first distributors, followed by a wider India rollout with multi-tier plans, and later an enterprise phase extending to international markets such as the Gulf and Africa. These are planned directions, not committed dates or guaranteed availability.',
    status: 'roadmap',
  },
  {
    id: 54,
    section: 'K',
    sectionTitle: 'K. Rollout & roadmap',
    question: 'Which regions are being served first?',
    answer:
      'Planned expansion. The initial focus is Telangana, Andhra Pradesh, Karnataka and Tamil Nadu, with wider India and international markets planned for later phases.',
    status: 'roadmap',
  },
  {
    id: 55,
    section: 'K',
    sectionTitle: 'K. Rollout & roadmap',
    question: 'Is Roxy Group using RIA itself?',
    answer:
      'Yes. Roxy Group is the first distributor on RIA, so the platform is being proven on a real distribution business before it is offered more widely. Built and tested inside a real distribution business.',
    status: 'general',
  },
  {
    id: 56,
    section: 'K',
    sectionTitle: 'K. Rollout & roadmap',
    question: 'What is coming next?',
    answer:
      'Additional agents and modules, deeper live integration, and more languages and regions — all on the same platform.',
    status: 'roadmap',
  },

  // L. Commercials, pilot & support
  {
    id: 57,
    section: 'L',
    sectionTitle: 'L. Commercials, pilot & support',
    question: 'What does RIA cost?',
    answer:
      'RIA pricing is based on factors such as retailer volume, calling requirements, AI minutes and enabled modules. The appropriate plan is determined after understanding the distributor’s workflow and requirements.',
    status: 'general',
  },
  {
    id: 58,
    section: 'L',
    sectionTitle: 'L. Commercials, pilot & support',
    question: 'Is there a pilot or trial?',
    answer:
      'Yes. You can start with a pilot on a sample of your own accounts. The pilot is designed to evaluate RIA using the distributor’s own workflow and representative retailer data.',
    status: 'general',
  },
  {
    id: 59,
    section: 'L',
    sectionTitle: 'L. Commercials, pilot & support',
    question: 'How soon can we start?',
    answer:
      'It begins with a pilot. The exact timeline depends on your data and requirements, and our team confirms it with you.',
    status: 'general',
  },
  {
    id: 60,
    section: 'L',
    sectionTitle: 'L. Commercials, pilot & support',
    question: 'What support do we get?',
    answer:
      'Our team supports you through onboarding, configuration, call-flow setup, data preparation, pilot monitoring, exception handling and reporting. RIA also hands any exception or sensitive case to your team with the full conversation context attached. For anything specific to your business — pricing, timelines, or a pilot on your own data — please request a detailed RIA demonstration, and our team will walk you through the full platform.',
    status: 'general',
  },
];
