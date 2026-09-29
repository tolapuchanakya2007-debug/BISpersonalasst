import type { Source } from '@/types';

export interface BisKnowledgeItem {
  id: string;
  title: string;
  query: string;
  answer: string;
  explanation: string;
  nextStep: string;
  source: Source;
}

const mkSource = (document: string, url: string): Source => ({
  id: `src-${document.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
  document,
  type: 'Official BIS source',
  status: 'demo',
  url,
});

export const bisKnowledge: BisKnowledgeItem[] = [
  {
    id: 'kys-01',
    title: 'What is Know Your Standard?',
    query: 'What is Know Your Standard?',
    answer:
      "BIS's Know Your Standard facility provides access to documents and data related to a selected Indian Standard. Users can search using an Indian Standard (IS) number or a keyword such as a product name. Information can include the Indian Standard document, amendments, gazette notifications, schemes of testing and inspection, licence information, laboratories, classification details and committee information.",
    explanation:
      'Know Your Standard is a BIS online facility that helps both consumers and manufacturers find details about a specific Indian Standard — including the document, amendments, related laboratories and licence information — by searching with an IS number or a product keyword.',
    nextStep:
      'You can explore the Know Your Standard facility on the official BIS website using the source link below.',
    source: mkSource('Official BIS - Know Your Standard', 'https://www.bis.gov.in/know-your-standard/'),
  },
  {
    id: 'kys-02',
    title: 'How can a manufacturer find the relevant Indian Standard?',
    query: 'How can a manufacturer find the relevant Indian Standard?',
    answer:
      "A manufacturer who does not know the relevant Indian Standard can search for the Indian Standard against a product through the BIS online facility. BIS's product certification FAQ directs manufacturers to search for the relevant Indian Standard against their product.",
    explanation:
      'If a manufacturer is unsure which Indian Standard applies to their product, BIS provides an online search facility to find the relevant standard by product name or keyword. This is the recommended first step before exploring certification.',
    nextStep:
      'Use the Know Your Standard facility on the official BIS website to search for the applicable standard.',
    source: mkSource('Official BIS - Product Certification FAQ', 'https://www.bis.gov.in/product-certification/product-certification-faq/'),
  },
  {
    id: 'kys-03',
    title: 'When is BIS certification compulsory?',
    query: 'When is BIS certification compulsory?',
    answer:
      'Products are brought under compulsory certification by the Central Government under the BIS Act, 2016 or other Acts. If a product is covered by the applicable compulsory certification requirements, BIS licensing is compulsory for that product.',
    explanation:
      'BIS certification is not automatically compulsory for every product that has an Indian Standard. A product becomes subject to compulsory certification only when the Central Government brings it under compulsory certification requirements under the BIS Act, 2016 or other Acts. Always verify whether your specific product is covered.',
    nextStep:
      'Check whether your product is covered by a current compulsory certification requirement using official BIS sources.',
    source: mkSource('Official BIS - Product Certification FAQ', 'https://www.bis.gov.in/product-certification/product-certification-faq/'),
  },
  {
    id: 'kys-04',
    title: 'What does a manufacturer need for BIS certification?',
    query: 'What does a manufacturer need for BIS certification?',
    answer:
      'For obtaining a BIS licence, a manufacturer needs the required manufacturing infrastructure, appropriate process controls, quality control and testing capabilities for the product according to the relevant Indian Standard. The product must conform to the requirements of the applicable Indian Standard.',
    explanation:
      'To get a BIS licence, a manufacturer must have adequate manufacturing infrastructure, process controls, quality control and testing capabilities that meet the relevant Indian Standard, and the product must conform to that standard. These are assessed by BIS during the licensing process.',
    nextStep:
      'Review the applicable Indian Standard and assess your manufacturing and testing capabilities before applying.',
    source: mkSource('Official BIS - Product Certification FAQ', 'https://www.bis.gov.in/product-certification/product-certification-faq/'),
  },
  {
    id: 'kys-05',
    title: 'How does BIS grant a product certification licence?',
    query: 'How does BIS grant a product certification licence?',
    answer:
      'BIS states that licensing is based on successful assessment of manufacturing infrastructure, process controls, quality control and testing capabilities. Product conformity may be established through third-party laboratory testing, testing at the manufacturing premises, or a combination of both, depending on the applicable procedure.',
    explanation:
      'BIS grants a licence after successfully assessing the manufacturer infrastructure, process controls, quality control and testing capabilities. Product conformity can be established through third-party lab testing, on-site testing, or both, depending on the procedure that applies.',
    nextStep:
      'Prepare for the BIS assessment by ensuring your infrastructure, quality control and testing capabilities meet the applicable standard.',
    source: mkSource('Official BIS - Product Certification FAQ', 'https://www.bis.gov.in/product-certification/product-certification-faq/'),
  },
  {
    id: 'kys-06',
    title: 'What BIS Standard Marks are used?',
    query: 'What are the different BIS Standard Marks?',
    answer:
      "BIS's consumer FAQ identifies different Standard Marks including the ISI Mark and Eco Mark for products under Scheme-I, the Registration Mark for products under the Self Declaration of Conformity Scheme under Scheme-II, and Hallmark for hallmarked articles.",
    explanation:
      'BIS uses different marks for different schemes: the ISI Mark and Eco Mark (Scheme-I), the Registration Mark (Scheme-II, Self Declaration of Conformity), and Hallmark for precious metal articles. The mark depends on the applicable certification scheme.',
    nextStep:
      'To identify the correct mark for a product, check the applicable certification scheme on official BIS sources.',
    source: mkSource('Official BIS - Consumer FAQ', 'https://www.bis.gov.in/consumer-overview/for-consumers-faq/'),
  },
  {
    id: 'kys-07',
    title: 'How can consumers complain to BIS?',
    query: 'How can I file a complaint with BIS?',
    answer:
      'Consumers can lodge complaints regarding BIS-certified products, misuse of the BIS Standard Mark, violations of Quality Control Orders, misleading claims of conformity to Indian Standards, BIS services and other issues. BIS provides complaint channels including its online systems, BIS CARE app, email and relevant BIS offices.',
    explanation:
      'You can complain to BIS about certified products, misuse of the Standard Mark, Quality Control Order violations, misleading conformity claims, and BIS services. Complaints can be filed through BIS online systems, the BIS CARE app, email, or BIS offices.',
    nextStep:
      'Use the BIS CARE app or the official BIS consumer protection channels to file your complaint.',
    source: mkSource('Official BIS - Consumer Protection', 'https://www.bis.gov.in/consumer-overview/consumer-protection/'),
  },
  {
    id: 'kys-08',
    title: 'What can the BIS CARE app do?',
    query: 'What is the BIS CARE app?',
    answer:
      'The BIS CARE app provides consumer and industry-related BIS features. According to BIS, it can support licence verification, HUID verification for hallmarked jewellery, Know Your Standards information, BIS laboratory and office locations, certification information, complaint registration and other BIS services.',
    explanation:
      'The BIS CARE app is an official mobile app that lets consumers and industries verify licences, check HUID on hallmarked jewellery, access Know Your Standards, find BIS labs and offices, get certification information, and register complaints — all from a phone.',
    nextStep:
      'Download the BIS CARE app from the official app stores and use it for verification and complaints.',
    source: mkSource('Official BIS - BIS CARE App', 'https://www.bis.gov.in/bis-apps/'),
  },
  {
    id: 'kys-09',
    title: 'What is R-Number verification?',
    query: 'What is R-Number verification?',
    answer:
      'The BIS CARE app provides a feature to verify the R-Number of electronic products covered under the Compulsory Registration Scheme (CRS).',
    explanation:
      'R-Number verification is a feature in the BIS CARE app that lets you check the registration number of electronic products covered under the Compulsory Registration Scheme (CRS). This helps confirm whether a product has a valid CRS registration.',
    nextStep:
      'Use the BIS CARE app to verify the R-Number of CRS-covered electronic products.',
    source: mkSource('Official BIS - BIS CARE App', 'https://www.bis.gov.in/bis-apps/'),
  },
  {
    id: 'kys-10',
    title: 'What is Hallmarking?',
    query: 'What is Hallmarking?',
    answer:
      'BIS describes hallmarking as the accurate determination and official recording of the proportionate content of precious metal in precious metal articles. Hallmarks serve as official marks related to the purity or fineness of precious metal articles.',
    explanation:
      'Hallmarking is the official process of determining and recording the precious metal content (purity/fineness) in articles like gold and silver jewellery. Hallmarks are the official marks that indicate this purity.',
    nextStep:
      'To verify a hallmarked item, ask "How can I verify a hallmarked jewellery item?" or use the BIS CARE app for HUID verification.',
    source: mkSource('Official BIS - Hallmarking FAQ', 'https://www.bis.gov.in/hallmarking-overview/hallmarking-faqs/hallmarking-faq/'),
  },
  {
    id: 'kys-11',
    title: 'How can I check whether a product has a valid BIS licence?',
    query: 'How can I check whether a product has a valid BIS licence?',
    answer:
      'You can check whether a product has a valid BIS licence using the BIS CARE app, which supports licence verification. The full system will connect this directly to verified BIS records for real-time checks.',
    explanation:
      'To verify a valid BIS licence, use the BIS CARE app licence verification feature. In this prototype, live verification is not connected, but the official BIS CARE app provides this capability.',
    nextStep:
      'Download the BIS CARE app and use the licence verification feature, or visit official BIS sources.',
    source: mkSource('Official BIS - BIS CARE App', 'https://www.bis.gov.in/bis-apps/'),
  },
  {
    id: 'kys-12',
    title: 'How can I verify a hallmarked jewellery item?',
    query: 'How can I verify a hallmarked jewellery item?',
    answer:
      'You can verify a hallmarked jewellery item using the HUID verification feature in the BIS CARE app. HUID is a unique identification used for hallmarked precious metal articles.',
    explanation:
      'Hallmarked jewellery items carry a HUID (Hallmark Unique ID). You can verify this HUID through the BIS CARE app to confirm the authenticity and purity of the item.',
    nextStep:
      'Use the BIS CARE app HUID verification feature to check your hallmarked jewellery item.',
    source: mkSource('Official BIS - BIS CARE App', 'https://www.bis.gov.in/bis-apps/'),
  },
  {
    id: 'kys-13',
    title: 'What types of complaints can I make to BIS?',
    query: 'What types of complaints can I make to BIS?',
    answer:
      'Consumers can lodge complaints regarding BIS-certified products, misuse of the BIS Standard Mark, violations of Quality Control Orders, misleading claims of conformity to Indian Standards, BIS services and other issues.',
    explanation:
      'You can complain about: BIS-certified products, misuse of the BIS Standard Mark, Quality Control Order violations, misleading conformity claims, and BIS services. These can be filed through BIS online systems, the BIS CARE app, email or BIS offices.',
    nextStep:
      'File your complaint through the BIS CARE app or official BIS consumer protection channels.',
    source: mkSource('Official BIS - Consumer Protection', 'https://www.bis.gov.in/consumer-overview/consumer-protection/'),
  },
  {
    id: 'kys-14',
    title: 'How can I check the authenticity of a product?',
    query: 'How can I check the authenticity of a product?',
    answer:
      'You can check the authenticity of a BIS-certified product by verifying its licence or registration through the BIS CARE app. For hallmarked jewellery, you can verify the HUID. For CRS electronic products, you can verify the R-Number.',
    explanation:
      'Product authenticity can be checked using the BIS CARE app: verify the BIS licence for certified products, the HUID for hallmarked jewellery, or the R-Number for CRS-covered electronics.',
    nextStep:
      'Download the BIS CARE app and use the relevant verification feature for your product type.',
    source: mkSource('Official BIS - BIS CARE App', 'https://www.bis.gov.in/bis-apps/'),
  },
  {
    id: 'kys-15',
    title: 'What is an HUID number?',
    query: 'What is an HUID number?',
    answer:
      'HUID stands for Hallmark Unique ID. It is a unique identification used for hallmarked precious metal articles. You can verify a HUID using the BIS CARE app to confirm the authenticity and purity of a hallmarked item.',
    explanation:
      'HUID (Hallmark Unique ID) is a unique code assigned to hallmarked jewellery. It lets you verify the item authenticity and purity through the BIS CARE app.',
    nextStep:
      'Use the BIS CARE app HUID verification feature to check a hallmarked item.',
    source: mkSource('Official BIS - BIS CARE App', 'https://www.bis.gov.in/bis-apps/'),
  },
  {
    id: 'kys-16',
    title: 'What is the Compulsory Registration Scheme?',
    query: 'What is the Compulsory Registration Scheme?',
    answer:
      'The Compulsory Registration Scheme (CRS) is a BIS scheme under which electronic products are registered after conformity to the applicable Indian Standard is established. Products covered under CRS can be verified using their R-Number through the BIS CARE app.',
    explanation:
      'CRS is a BIS scheme for electronic products where manufacturers self-declare conformity to an applicable standard and obtain registration. CRS-registered products carry an R-Number that can be verified via the BIS CARE app.',
    nextStep:
      'To verify a CRS product, use the R-Number verification feature in the BIS CARE app.',
    source: mkSource('Official BIS - BIS CARE App', 'https://www.bis.gov.in/bis-apps/'),
  },
  {
    id: 'kys-17',
    title: 'Can I search for a standard using an IS number?',
    query: 'Can I search for a standard using an IS number?',
    answer:
      "Yes. BIS's Know Your Standard facility allows users to search for an Indian Standard using an IS number. The results can include the standard document, amendments, gazette notifications, schemes of testing and inspection, licence information, laboratories and committee information.",
    explanation:
      'You can search by IS number through the Know Your Standard facility on the official BIS website. This returns the standard document and related information.',
    nextStep:
      'Use the Know Your Standard facility on the official BIS website to search by IS number.',
    source: mkSource('Official BIS - Know Your Standard', 'https://www.bis.gov.in/know-your-standard/'),
  },
  {
    id: 'kys-18',
    title: 'Can I search for a standard using a product keyword?',
    query: 'Can I search for a standard using a product keyword?',
    answer:
      "Yes. BIS's Know Your Standard facility allows users to search using a keyword such as a product name. This helps find the relevant Indian Standard when you do not know the IS number.",
    explanation:
      'If you do not know the IS number, you can search by product keyword through the Know Your Standard facility on the official BIS website.',
    nextStep:
      'Use the Know Your Standard facility on the official BIS website to search by product keyword.',
    source: mkSource('Official BIS - Know Your Standard', 'https://www.bis.gov.in/know-your-standard/'),
  },
  {
    id: 'kys-19',
    title: 'What information is available for a selected Indian Standard?',
    query: 'What information is available for a selected Indian Standard?',
    answer:
      'For a selected Indian Standard, the Know Your Standard facility can provide the Indian Standard document, amendments, gazette notifications, schemes of testing and inspection, licence information, laboratories, classification details and committee information.',
    explanation:
      'When you select an Indian Standard in Know Your Standard, you can access the document, amendments, gazette notifications, testing and inspection schemes, licence information, laboratories, classification and committee details.',
    nextStep:
      'Use the Know Your Standard facility on the official BIS website to view details for a standard.',
    source: mkSource('Official BIS - Know Your Standard', 'https://www.bis.gov.in/know-your-standard/'),
  },
  {
    id: 'kys-20',
    title: 'Where can I find BIS laboratories related to a standard?',
    query: 'Where can I find BIS laboratories related to a standard?',
    answer:
      'BIS laboratory information related to a standard can be accessed through the Know Your Standard facility. The BIS CARE app also provides BIS laboratory and office location information.',
    explanation:
      'You can find BIS laboratories related to a standard through the Know Your Standard facility on the BIS website, or through the BIS CARE app which lists laboratory and office locations.',
    nextStep:
      'Use the Know Your Standard facility or the BIS CARE app to find BIS laboratories.',
    source: mkSource('Official BIS - Know Your Standard', 'https://www.bis.gov.in/know-your-standard/'),
  },
];
