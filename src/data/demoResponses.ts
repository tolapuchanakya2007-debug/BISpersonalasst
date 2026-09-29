import type { AssistantResponse, Source } from '@/types';

const demoSource: Source = {
  id: 'src-bis-demo',
  document: 'BIS information',
  type: 'Official BIS information',
  status: 'demo',
};

const fallbackResponse: AssistantResponse = {
  id: 'resp-fallback',
  query: '',
  answer:
    "I don't have enough verified BIS information in the current prototype to answer this reliably. In the full system, I would retrieve the answer from verified BIS sources.",
  explanation:
    'This prototype uses clearly labelled demo data. In the production system, a RAG (Retrieval-Augmented Generation) pipeline will retrieve relevant information from verified BIS sources before generating an answer.',
  nextStep:
    'Try one of the suggested questions, or rephrase your question using terms like "BIS", "certification", "standards", or "services".',
  sources: [demoSource],
  isDemo: true,
  isFallback: true,
};

export const demoResponses: Record<string, AssistantResponse> = {
  'what is bis': {
    id: 'resp-bis',
    query: 'What is BIS?',
    answer:
      'The Bureau of Indian Standards (BIS) is the national standards body of India. It is responsible for the formulation and publication of Indian Standards and for operating product certification schemes, among other activities.',
    explanation:
      'In simple terms, BIS develops Indian Standards that specify quality and safety requirements for products and services, and it offers certification to help manufacturers demonstrate conformity to those standards.',
    nextStep:
      'To learn how certification works, ask "What is BIS certification?" or explore the Certification page.',
    sources: [demoSource],
    isDemo: true,
  },
  'what is bis certification': {
    id: 'resp-cert',
    query: 'What is BIS certification?',
    answer:
      'BIS certification is a conformity assessment process through which a manufacturer can demonstrate that a product meets the requirements of a relevant Indian Standard. It typically involves testing, factory assessment and documentation, followed by a licence or certificate if requirements are met.',
    explanation:
      'Certification helps build trust that a product conforms to a standard. However, the existence of an Indian Standard for a product does not automatically mean BIS certification is mandatory — applicability depends on the product, the conformity assessment scheme and current regulatory requirements.',
    nextStep:
      'For the certification process overview, visit the Certification page, or ask "How do I apply for BIS certification?"',
    sources: [demoSource],
    isDemo: true,
  },
  'what is the bis standard mark': {
    id: 'resp-mark',
    query: 'What is the BIS Standard Mark?',
    answer:
      'The BIS Standard Mark is a mark applied to products to indicate conformity to a relevant Indian Standard under a BIS certification scheme. It signals that the product has met the requirements of the applicable standard.',
    explanation:
      'Consumers may recognise the mark as an indication of quality and safety. The specific mark and its use depend on the applicable certification scheme. Not all products bearing a standard are required to carry the BIS mark — some certification is voluntary unless made mandatory by regulation.',
    nextStep:
      'To check a product, ask "How can I verify BIS certification?"',
    sources: [demoSource],
    isDemo: true,
  },
  'how can i verify bis certification': {
    id: 'resp-verify',
    query: 'How can I verify BIS certification?',
    answer:
      'In the full system, you will be able to verify certification by entering a licence or certificate number, which will be checked against verified BIS records. In this prototype, verification is not connected to live BIS data.',
    explanation:
      'Verification typically involves checking the validity of a licence or certificate against official BIS records. Always use official BIS sources to confirm certification status.',
    nextStep:
      'Visit the Services page and choose "Certificate / Licence Verification" to see the planned feature.',
    sources: [demoSource],
    isDemo: true,
  },
  'how do i apply for bis certification': {
    id: 'resp-apply',
    query: 'How do I apply for BIS certification?',
    answer:
      'Applying for BIS certification generally involves identifying the product and applicable Indian Standard, selecting the applicable conformity assessment scheme, preparing documentation, completing testing/assessment, and submitting an application to BIS. The exact steps depend on the product and scheme.',
    explanation:
      'A typical high-level flow is: identify product → identify applicable standard/regulatory requirement → check conformity assessment scheme → testing/assessment → documentation and application → BIS assessment and decision. Exact requirements vary by product and current regulation.',
    nextStep:
      'See the visual process on the Certification page, or use the Industry Guidance page to generate a demo guidance plan.',
    sources: [demoSource],
    isDemo: true,
  },
  'how can i find the relevant indian standard': {
    id: 'resp-find-std',
    query: 'How can I find the relevant Indian Standard?',
    answer:
      'In the full system, you will be able to search verified BIS catalogues by product, standard number or keyword. This prototype includes a demo Standards search with clearly labelled demo records.',
    explanation:
      'Finding the relevant standard is usually the first step before exploring certification. Always confirm the applicable standard through official BIS sources, as standards are updated over time.',
    nextStep: 'Visit the Standards page to try the demo search.',
    sources: [demoSource],
    isDemo: true,
  },
  'what documents may be required': {
    id: 'resp-docs',
    query: 'What documents may be required?',
    answer:
      'Documentation typically includes product and manufacturer details, test reports, quality control records, factory information and application forms. The exact documents depend on the product, applicable standard and conformity assessment scheme.',
    explanation:
      'This is a general indication only. Do not treat this as an official list. The full system will provide a verified checklist based on the specific product and scheme.',
    nextStep:
      'Use the Industry Guidance page to generate a demo guidance plan that includes documents to investigate.',
    sources: [demoSource],
    isDemo: true,
  },
  'what is a quality control order': {
    id: 'resp-qco',
    query: 'What is a Quality Control Order?',
    answer:
      'A Quality Control Order (QCO) is a regulatory instrument that can make conformity to an Indian Standard mandatory for specified products. When a QCO applies, products may need to bear a certification mark from BIS to be sold in the relevant market.',
    explanation:
      'A QCO can change whether certification is voluntary or mandatory. The applicability depends on the product and the current regulatory notification. Always verify current QCOs through official sources.',
    nextStep:
      'Confirm whether your product is covered by a current QCO using official BIS or regulatory sources.',
    sources: [demoSource],
    isDemo: true,
  },
  'how can i complain about a product': {
    id: 'resp-complain',
    query: 'How can I complain about a product?',
    answer:
      'In the full system, you will be guided through the consumer complaint process with links to official BIS consumer services. This prototype shows the planned flow without live integration.',
    explanation:
      'Consumer complaints about products or certification can typically be raised through official BIS consumer grievance channels. Always use official channels for formal complaints.',
    nextStep: 'Visit the Consumer Help page and choose "Consumer complaint" for a guided menu.',
    sources: [demoSource],
    isDemo: true,
  },
  'what is an indian standard': {
    id: 'resp-is',
    query: 'What is an Indian Standard?',
    answer:
      'An Indian Standard (IS) is a documented standard developed by BIS that specifies requirements, guidelines or characteristics for products, services, processes or systems. Each standard is identified by a number prefixed with "IS".',
    explanation:
      'An Indian Standard existing for a product does not automatically mean BIS certification is required. Certification may be voluntary or mandatory depending on the applicable conformity assessment scheme and any regulatory requirement such as a Quality Control Order.',
    nextStep: 'Explore the Standards page to see demo standard records.',
    sources: [demoSource],
    isDemo: true,
  },
  'i manufacture electrical products. what bis requirements should i check': {
    id: 'resp-electrical',
    query: 'I manufacture electrical products. What BIS requirements should I check?',
    answer:
      'For electrical products, you should check: the applicable Indian Standard for your product, whether a conformity assessment scheme applies, whether your product is covered by a Quality Control Order making certification mandatory, testing requirements, and documentation needed for application.',
    explanation:
      'Electrical products are commonly subject to safety standards and may be covered by mandatory certification. However, the specific requirements depend on the exact product, applicable standard and current regulation. Do not assume certification is mandatory without verifying.',
    nextStep:
      'Use the Industry Guidance page to generate a demo guidance plan for your product, and confirm requirements through official BIS sources.',
    sources: [demoSource],
    isDemo: true,
  },
};

export function getFallbackResponse(query: string): AssistantResponse {
  return { ...fallbackResponse, id: `resp-fallback-${Date.now()}`, query };
}
