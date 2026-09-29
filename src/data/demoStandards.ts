import type { DemoStandard, Source } from '@/types';

const demoSource: Source = {
  id: 'src-bis-demo',
  document: 'BIS information',
  type: 'Official BIS information',
  status: 'demo',
};

export const demoStandards: DemoStandard[] = [
  {
    id: 'std-1001',
    number: 'IS 10001',
    title: 'Demo Electrical Appliance Safety Standard',
    category: 'Electrical',
    industry: 'Electrical & Electronics',
    status: 'demo',
    description:
      'Demo record. A prototype standard covering general safety requirements for household electrical appliances. This is illustrative data and not a real BIS standard.',
    scope:
      'Demo scope: general safety and performance requirements for selected household electrical appliances.',
    certificationNote:
      'Whether BIS certification applies depends on the product, applicable Indian Standard, conformity assessment scheme and any current regulatory requirement. Verify with official BIS sources.',
    source: demoSource,
  },
  {
    id: 'std-2002',
    number: 'IS 20002',
    title: 'Demo Construction Material Standard',
    category: 'Construction',
    industry: 'Construction & Building Materials',
    status: 'demo',
    description:
      'Demo record. A prototype standard for construction material specifications. This is illustrative data and not a real BIS standard.',
    scope:
      'Demo scope: material composition, strength and durability requirements for construction materials.',
    certificationNote:
      'Certification requirements vary by product and regulation. Confirm applicability through official BIS sources.',
    source: demoSource,
  },
  {
    id: 'std-3003',
    number: 'IS 30003',
    title: 'Demo Food Product Quality Standard',
    category: 'Food',
    industry: 'Food & Agriculture',
    status: 'demo',
    description:
      'Demo record. A prototype standard for food product quality and safety parameters. This is illustrative data and not a real BIS standard.',
    scope:
      'Demo scope: quality, hygiene and safety parameters for selected food products.',
    certificationNote:
      'Food-related certification may involve other regulators and schemes. Verify current requirements with official sources.',
    source: demoSource,
  },
  {
    id: 'std-4004',
    number: 'IS 40004',
    title: 'Demo Consumer Goods Safety Standard',
    category: 'Consumer Goods',
    industry: 'Consumer Products',
    status: 'demo',
    description:
      'Demo record. A prototype standard covering safety of general consumer goods. This is illustrative data and not a real BIS standard.',
    scope:
      'Demo scope: general safety, labelling and performance requirements for consumer goods.',
    certificationNote:
      'Not every product with an Indian Standard requires BIS certification. Check mandatory requirements via official BIS sources.',
    source: demoSource,
  },
  {
    id: 'std-5005',
    number: 'IS 50005',
    title: 'Demo Textile Product Standard',
    category: 'Consumer Goods',
    industry: 'Textiles',
    status: 'demo',
    description:
      'Demo record. A prototype standard for textile product specifications. This is illustrative data and not a real BIS standard.',
    scope: 'Demo scope: fibre content, quality and labelling for textile products.',
    certificationNote:
      'Certification applicability depends on the product and current regulatory framework. Verify with official BIS sources.',
    source: demoSource,
  },
  {
    id: 'std-6006',
    number: 'IS 60006',
    title: 'Demo Water Purifier Standard',
    category: 'Electrical',
    industry: 'Electrical & Electronics',
    status: 'demo',
    description:
      'Demo record. A prototype standard for water purifier performance and safety. This is illustrative data and not a real BIS standard.',
    scope:
      'Demo scope: performance, safety and filtration requirements for household water purifiers.',
    certificationNote:
      'Confirm whether this product category is under mandatory certification via official BIS sources.',
    source: demoSource,
  },
  {
    id: 'std-7007',
    number: 'IS 70007',
    title: 'Demo Steel Product Standard',
    category: 'Construction',
    industry: 'Metals & Steel',
    status: 'demo',
    description:
      'Demo record. A prototype standard for steel product specifications. This is illustrative data and not a real BIS standard.',
    scope: 'Demo scope: composition, mechanical properties and testing for steel products.',
    certificationNote:
      'Some steel products may be covered by Quality Control Orders. Verify current requirements with official BIS sources.',
    source: demoSource,
  },
  {
    id: 'std-8008',
    number: 'IS 80008',
    title: 'Demo Toy Safety Standard',
    category: 'Consumer Goods',
    industry: 'Toys & Children Products',
    status: 'demo',
    description:
      'Demo record. A prototype standard for toy safety requirements. This is illustrative data and not a real BIS standard.',
    scope: 'Demo scope: mechanical, chemical and flammability safety for toys.',
    certificationNote:
      'Toy certification may be mandatory under specific regulations. Verify applicability with official BIS sources.',
    source: demoSource,
  },
];

const hallmarkingSource: Source = {
  id: 'src-bis-hallmarking',
  document: 'Official BIS - Hallmarking FAQ',
  type: 'Official BIS source',
  status: 'demo',
  url: 'https://www.bis.gov.in/hallmarking-overview/hallmarking-faqs/hallmarking-faq/',
};

export const verifiedStandards: DemoStandard[] = [
  {
    id: 'std-is1417',
    number: 'IS 1417',
    title: 'Gold and Gold Alloys, Jewellery/Artefacts - Fineness and Marking',
    category: 'Consumer Goods',
    industry: 'Precious Metals & Jewellery',
    status: 'demo',
    description:
      'Demo Standard Reference. IS 1417 relates to gold and gold alloys, jewellery/artefacts — fineness and marking. Referenced by official BIS Hallmarking FAQ material. Verify latest details on Official BIS.',
    scope:
      'Demo reference only. Scope details are not included in this prototype. Verify the current scope on the official BIS website.',
    certificationNote:
      'Hallmarking of gold articles may be subject to regulatory requirements. Verify current applicability and requirements using official BIS sources.',
    source: hallmarkingSource,
  },
  {
    id: 'std-is2112',
    number: 'IS 2112',
    title: 'Silver and Silver Alloys, Jewellery/Artefacts - Fineness and Marking',
    category: 'Consumer Goods',
    industry: 'Precious Metals & Jewellery',
    status: 'demo',
    description:
      'Demo Standard Reference. IS 2112 relates to silver and silver alloys, jewellery/artefacts — fineness and marking. Referenced by official BIS Hallmarking FAQ material. Verify latest details on Official BIS.',
    scope:
      'Demo reference only. Scope details are not included in this prototype. Verify the current scope on the official BIS website.',
    certificationNote:
      'Hallmarking of silver articles may be subject to regulatory requirements. Verify current applicability and requirements using official BIS sources.',
    source: hallmarkingSource,
  },
  {
    id: 'std-is15820',
    number: 'IS 15820',
    title: 'General Requirements for establishment and operation of Assaying and Hallmarking Centres',
    category: 'Consumer Goods',
    industry: 'Precious Metals & Jewellery',
    status: 'demo',
    description:
      'Demo Standard Reference. IS 15820 relates to general requirements for establishment and operation of assaying and hallmarking centres. Referenced by official BIS Hallmarking FAQ material. Verify latest details on Official BIS.',
    scope:
      'Demo reference only. Scope details are not included in this prototype. Verify the current scope on the official BIS website.',
    certificationNote:
      'Assaying and hallmarking centres operate under BIS requirements. Verify current requirements using official BIS sources.',
    source: hallmarkingSource,
  },
];

export const allStandards: DemoStandard[] = [...demoStandards, ...verifiedStandards];

export const productCategories = [
  'Electrical',
  'Construction',
  'Food',
  'Consumer Goods',
];

export const industryCategories = [
  'Electrical & Electronics',
  'Construction & Building Materials',
  'Food & Agriculture',
  'Consumer Products',
  'Textiles',
  'Metals & Steel',
  'Toys & Children Products',
  'Precious Metals & Jewellery',
];
