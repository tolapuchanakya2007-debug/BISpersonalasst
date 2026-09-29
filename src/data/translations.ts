export interface TranslationEntry {
  en: string;
  hi: string;
  te: string;
}

export const translations: Record<string, TranslationEntry> = {
  // ── Standards page ──
  'standards.title': {
    en: 'Explore Indian Standards',
    hi: 'भारतीय मानक खोजें',
    te: 'భారతీయ ప్రమాణాలను అన్వేషించండి',
  },
  'standards.description': {
    en: 'Search demo standard records by product, standard number or keyword.',
    hi: 'उत्पाद, मानक संख्या या कीवर्ड द्वारा डेमो मानक रिकॉर्ड खोजें।',
    te: 'ఉత్పత్తి, ప్రమాణం సంఖ్య లేదా కీవర్డ్ ద్వారా డెమో ప్రమాణ రికార్డులను వెతకండి.',
  },
  'standards.searchPlaceholder': {
    en: 'Search by product, standard number or keyword…',
    hi: 'उत्पाद, मानक संख्या या कीवर्ड द्वारा खोजें…',
    te: 'ఉత్పత్తి, ప్రమాణం సంఖ్య లేదా కీవర్డ్ ద్వారా వెతకండి…',
  },
  'standards.category': {
    en: 'Product category',
    hi: 'उत्पाद श्रेणी',
    te: 'ఉత్పత్తి వర్గం',
  },
  'standards.industry': {
    en: 'Industry',
    hi: 'उद्योग',
    te: 'పరిశ్రమ',
  },
  'standards.status': {
    en: 'Status',
    hi: 'स्थिति',
    te: 'స్థితి',
  },
  'standards.allCategories': {
    en: 'All categories',
    hi: 'सभी श्रेणियाँ',
    te: 'అన్ని వర్గాలు',
  },
  'standards.allIndustries': {
    en: 'All industries',
    hi: 'सभी उद्योग',
    te: 'అన్ని పరిశ్రమలు',
  },
  'standards.allStatuses': {
    en: 'All statuses',
    hi: 'सभी स्थिति',
    te: 'అన్ని స్థితులు',
  },
  'standards.demoData': {
    en: 'Demo Data',
    hi: 'डेमो डेटा',
    te: 'డెమో డేటా',
  },
  'standards.disclaimer': {
    en: 'This is demo data. Verify all information against current official BIS sources.',
    hi: 'यह डेमो डेटा है। सभी जानकारी को वर्तमान आधिकारिक BIS स्रोतों से सत्यापित करें।',
    te: 'ఇది డెమో డేటా. అన్ని సమాచారాన్ని ప్రస్తుత అధికారిక BIS మూలాల నుండి ధృవీకరించండి.',
  },
  'standards.disclaimerInline': {
    en: 'Demo data — verify with official BIS sources.',
    hi: 'डेमो डेटा — आधिकारिक BIS स्रोतों से सत्यापित करें।',
    te: 'డెమో డేటా — అధికారిక BIS మూలాల నుండి ధృవీకరించండి.',
  },
  'standards.result': {
    en: 'result',
    hi: 'परिणाम',
    te: 'ఫలితం',
  },
  'standards.results': {
    en: 'results',
    hi: 'परिणाम',
    te: 'ఫలితాలు',
  },
  'standards.found': {
    en: 'found',
    hi: 'मिले',
    te: 'కనుగొనబడ్డాయి',
  },
  'standards.noResults': {
    en: 'No demo standards match your search. Try different keywords or filters.',
    hi: 'आपकी खोज से कोई डेमो मानक मेल नहीं खाता। अलग कीवर्ड या फ़िल्टर आज़माएँ।',
    te: 'మీ శోధనతో ఏ డెమో ప్రమాణాలు సరిపోలడం లేదు. వేరే కీవర్డ్‌లు లేదా ఫిల్టర్‌లను ప్రయత్నించండి.',
  },
  'standards.viewDetails': {
    en: 'View Details',
    hi: 'विवरण देखें',
    te: 'వివరాలు చూడండి',
  },

  // ── Standard Details page ──
  'standards.backToStandards': {
    en: 'Back to Standards',
    hi: 'मानकों पर वापस',
    te: 'ప్రమాణాలకు తిరిగి వెళ్ళండి',
  },
  'standards.standardNumber': {
    en: 'Standard Number',
    hi: 'मानक संख्या',
    te: 'ప్రమాణం సంఖ్య',
  },
  'standards.titleLabel': {
    en: 'Title',
    hi: 'शीर्षक',
    te: 'శీర్షిక',
  },
  'standards.productCategory': {
    en: 'Product Category',
    hi: 'उत्पाद श्रेणी',
    te: 'ఉత్పత్తి వర్గం',
  },
  'standards.industryLabel': {
    en: 'Industry',
    hi: 'उद्योग',
    te: 'పరిశ్రమ',
  },
  'standards.descriptionLabel': {
    en: 'Description',
    hi: 'विवरण',
    te: 'వివరణ',
  },
  'standards.scopeLabel': {
    en: 'Scope',
    hi: 'क्षेत्र',
    te: 'పరిధి',
  },
  'standards.relatedCertInfo': {
    en: 'Related Certification Information',
    hi: 'संबंधित प्रमाणन जानकारी',
    te: 'సంబంధిత ధృవీకరణ సమాచారం',
  },
  'standards.askAssistantAboutThis': {
    en: 'Ask Assistant About This',
    hi: 'इसके बारे में सहायक से पूछें',
    te: 'దీని గురించి అసిస్టెంట్‌ను అడగండి',
  },
  'standards.source': {
    en: 'Source',
    hi: 'स्रोत',
    te: 'మూలం',
  },
  'standards.quickActions': {
    en: 'Quick actions',
    hi: 'त्वरित क्रियाएँ',
    te: 'శీఘ్ర చర్యలు',
  },
  'standards.viewCertProcess': {
    en: 'View Certification Process',
    hi: 'प्रमाणन प्रक्रिया देखें',
    te: 'ధృవీకరణ ప్రక్రియ చూడండి',
  },
  'standards.industryGuidance': {
    en: 'Industry Guidance',
    hi: 'उद्योग मार्गदर्शन',
    te: 'పరిశ్రమ మార్గదర్శకం',
  },
  'standards.standardNotFound': {
    en: 'Standard not found.',
    hi: 'मानक नहीं मिला।',
    te: 'ప్రమాణం కనుగొనబడలేదు.',
  },
  'standards.verifyLatest': {
    en: 'Verify latest details on Official BIS',
    hi: 'नवीनतम जानकारी आधिकारिक BIS पर सत्यापित करें',
    te: 'తాజా వివరాలను అధికారిక BIS లో ధృవీకరించండి',
  },

  // ── Product categories ──
  'cat.Electrical': {
    en: 'Electrical',
    hi: 'विद्युत',
    te: 'విద్యుత్',
  },
  'cat.Construction': {
    en: 'Construction',
    hi: 'निर्माण',
    te: 'నిర్మాణం',
  },
  'cat.Food': {
    en: 'Food',
    hi: 'खाद्य',
    te: 'ఆహారం',
  },
  'cat.Consumer Goods': {
    en: 'Consumer Goods',
    hi: 'उपभोक्ता वस्तुएँ',
    te: 'వినియోగదారుల వస్తువులు',
  },

  // ── Industries ──
  'ind.Electrical & Electronics': {
    en: 'Electrical & Electronics',
    hi: 'विद्युत और इलेक्ट्रॉनिक्स',
    te: 'విద్యుత్ మరియు ఎలక్ట్రానిక్స్',
  },
  'ind.Construction & Building Materials': {
    en: 'Construction & Building Materials',
    hi: 'निर्माण और भवन सामग्री',
    te: 'నిర్మాణం మరియు భవన సామగ్రి',
  },
  'ind.Food & Agriculture': {
    en: 'Food & Agriculture',
    hi: 'खाद्य और कृषि',
    te: 'ఆహారం మరియు వ్యవసాయం',
  },
  'ind.Consumer Products': {
    en: 'Consumer Products',
    hi: 'उपभोक्ता उत्पाद',
    te: 'వినియోగదారుల ఉత్పత్తులు',
  },
  'ind.Textiles': {
    en: 'Textiles',
    hi: 'वस्त्र',
    te: 'వస్త్రాలు',
  },
  'ind.Metals & Steel': {
    en: 'Metals & Steel',
    hi: 'धातु और इस्पात',
    te: 'లోహాలు మరియు ఉక్కు',
  },
  'ind.Toys & Children Products': {
    en: 'Toys & Children Products',
    hi: 'खिलौने और बच्चों के उत्पाद',
    te: 'బొమ్మలు మరియు పిల్లల ఉత్పత్తులు',
  },
  'ind.Precious Metals & Jewellery': {
    en: 'Precious Metals & Jewellery',
    hi: 'बहुमूल्य धातु और आभूषण',
    te: 'విలువైన లోహాలు మరియు నగలు',
  },

  // ── Demo standard: IS 10001 ──
  'std.std-1001.title': {
    en: 'Demo Electrical Appliance Safety Standard',
    hi: 'डेमो विद्युत उपकरण सुरक्षा मानक',
    te: 'డెమో విద్యుత్ పరికరాల భద్రతా ప్రమాణం',
  },
  'std.std-1001.description': {
    en: 'Demo record. A prototype standard covering general safety requirements for household electrical appliances. This is illustrative data and not a real BIS standard.',
    hi: 'डेमो रिकॉर्ड। घरेलू विद्युत उपकरणों के लिए सामान्य सुरक्षा आवश्यकताओं को कवर करने वाला प्रोटोटाइप मानक। यह उदाहरणात्मक डेटा है, वास्तविक BIS मानक नहीं है।',
    te: 'డెమో రికార్డు. గృహ విద్యుత్ పరికరాల కోసం సాధారణ భద్రతా అవసరాలను కవర్ చేసే ప్రోటోటైప్ ప్రమాణం. ఇది ఉదాహరణ డేటా, వాస్తవ BIS ప్రమాణం కాదు.',
  },
  'std.std-1001.scope': {
    en: 'Demo scope: general safety and performance requirements for selected household electrical appliances.',
    hi: 'डेमो क्षेत्र: चयनित घरेलू विद्युत उपकरणों के लिए सामान्य सुरक्षा और प्रदर्शन आवश्यकताएँ।',
    te: 'డెమో పరిధి: ఎంచుకున్న గృహ విద్యుత్ పరికరాల కోసం సాధారణ భద్రత మరియు పనితీరు అవసరాలు.',
  },
  'std.std-1001.certificationNote': {
    en: 'Whether BIS certification applies depends on the product, applicable Indian Standard, conformity assessment scheme and any current regulatory requirement. Verify with official BIS sources.',
    hi: 'BIS प्रमाणन लागू होता है या नहीं, यह उत्पाद, लागू भारतीय मानक, अनुरूपता मूल्यांकन योजना और किसी वर्तमान नियामक आवश्यकता पर निर्भर करता है। आधिकारिक BIS स्रोतों से सत्यापित करें।',
    te: 'BIS ధృవీకరణ వర్తిస్తుందా అనేది ఉత్పత్తి, వర్తించే భారతీయ ప్రమాణం, అనురూపత మూల్యాంకన పథకం మరియు ప్రస్తుత నియంత్రణ అవసరంపై ఆధారపడి ఉంటుంది. అధికారిక BIS మూలాల నుండి ధృవీకరించండి.',
  },

  // ── Demo standard: IS 20002 ──
  'std.std-2002.title': {
    en: 'Demo Construction Material Standard',
    hi: 'डेमो निर्माण सामग्री मानक',
    te: 'డెమో నిర్మాణ సామగ్రి ప్రమాణం',
  },
  'std.std-2002.description': {
    en: 'Demo record. A prototype standard for construction material specifications. This is illustrative data and not a real BIS standard.',
    hi: 'डेमो रिकॉर्ड। निर्माण सामग्री विशिष्टताओं के लिए प्रोटोटाइप मानक। यह उदाहरणात्मक डेटा है, वास्तविक BIS मानक नहीं है।',
    te: 'డెమో రికార్డు. నిర్మాణ సామగ్రి విశిష్టతల కోసం ప్రోటోటైప్ ప్రమాణం. ఇది ఉదాహరణ డేటా, వాస్తవ BIS ప్రమాణం కాదు.',
  },
  'std.std-2002.scope': {
    en: 'Demo scope: material composition, strength and durability requirements for construction materials.',
    hi: 'डेमो क्षेत्र: निर्माण सामग्री के लिए सामग्री संरचना, शक्ति और स्थायित्व आवश्यकताएँ।',
    te: 'డెమో పరిధి: నిర్మాణ సామగ్రి కోసం సామగ్రి నిర్మాణం, బలం మరియు మన్నిక అవసరాలు.',
  },
  'std.std-2002.certificationNote': {
    en: 'Certification requirements vary by product and regulation. Confirm applicability through official BIS sources.',
    hi: 'प्रमाणन आवश्यकताएँ उत्पाद और नियमन के अनुसार भिन्न होती हैं। आधिकारिक BIS स्रोतों से अनुप्रयोज्यता की पुष्टि करें।',
    te: 'ధృవీకరణ అవసరాలు ఉత్పత్తి మరియు నియంత్రణ ప్రకారం మారుతాయి. అధికారిక BIS మూలాల నుండి వర్తించుదనాన్ని నిర్ధారించండి.',
  },

  // ── Demo standard: IS 30003 ──
  'std.std-3003.title': {
    en: 'Demo Food Product Quality Standard',
    hi: 'डेमो खाद्य उत्पाद गुणवत्ता मानक',
    te: 'డెమో ఆహార ఉత్పత్తి నాణ్యత ప్రమాణం',
  },
  'std.std-3003.description': {
    en: 'Demo record. A prototype standard for food product quality and safety parameters. This is illustrative data and not a real BIS standard.',
    hi: 'डेमो रिकॉर्ड। खाद्य उत्पाद गुणवत्ता और सुरक्षा पैरामीटर के लिए प्रोटोटाइप मानक। यह उदाहरणात्मक डेटा है, वास्तविक BIS मानक नहीं है।',
    te: 'డెమో రికార్డు. ఆహార ఉత్పత్తి నాణ్యత మరియు భద్రతా పారామితుల కోసం ప్రోటోటైప్ ప్రమాణం. ఇది ఉదాహరణ డేటా, వాస్తవ BIS ప్రమాణం కాదు.',
  },
  'std.std-3003.scope': {
    en: 'Demo scope: quality, hygiene and safety parameters for selected food products.',
    hi: 'डेमो क्षेत्र: चयनित खाद्य उत्पादों के लिए गुणवत्ता, स्वच्छता और सुरक्षा पैरामीटर।',
    te: 'డెమో పరిధి: ఎంచుకున్న ఆహార ఉత్పత్తుల కోసం నాణ్యత, పరిశుద్ధత మరియు భద్రతా పారామితులు.',
  },
  'std.std-3003.certificationNote': {
    en: 'Food-related certification may involve other regulators and schemes. Verify current requirements with official sources.',
    hi: 'खाद्य-संबंधी प्रमाणन में अन्य नियामक और योजनाएँ शामिल हो सकती हैं। वर्तमान आवश्यकताओं को आधिकारिक स्रोतों से सत्यापित करें।',
    te: 'ఆహార సంబంధిత ధృవీకరణలో ఇతర నియంత్రణదారులు మరియు పథకాలు ఉండవచ్చు. ప్రస్తుత అవసరాలను అధికారిక మూలాల నుండి ధృవీకరించండి.',
  },

  // ── Demo standard: IS 40004 ──
  'std.std-4004.title': {
    en: 'Demo Consumer Goods Safety Standard',
    hi: 'डेमो उपभोक्ता वस्तुएँ सुरक्षा मानक',
    te: 'డెమో వినియోగదారుల వస్తువుల భద్రతా ప్రమాణం',
  },
  'std.std-4004.description': {
    en: 'Demo record. A prototype standard covering safety of general consumer goods. This is illustrative data and not a real BIS standard.',
    hi: 'डेमो रिकॉर्ड। सामान्य उपभोक्ता वस्तुओं की सुरक्षा को कवर करने वाला प्रोटोटाइप मानक। यह उदाहरणात्मक डेटा है, वास्तविक BIS मानक नहीं है।',
    te: 'డెమో రికార్డు. సాధారణ వినియోగదారుల వస్తువుల భద్రతను కవర్ చేసే ప్రోటోటైప్ ప్రమాణం. ఇది ఉదాహరణ డేటా, వాస్తవ BIS ప్రమాణం కాదు.',
  },
  'std.std-4004.scope': {
    en: 'Demo scope: general safety, labelling and performance requirements for consumer goods.',
    hi: 'डेमो क्षेत्र: उपभोक्ता वस्तुओं के लिए सामान्य सुरक्षा, लेबलिंग और प्रदर्शन आवश्यकताएँ।',
    te: 'డెమో పరిధి: వినియోగదారుల వస్తువుల కోసం సాధారణ భద్రత, లేబులింగ్ మరియు పనితీరు అవసరాలు.',
  },
  'std.std-4004.certificationNote': {
    en: 'Not every product with an Indian Standard requires BIS certification. Check mandatory requirements via official BIS sources.',
    hi: 'भारतीय मानक वाले प्रत्येक उत्पाद के लिए BIS प्रमाणन आवश्यक नहीं है। अनिवार्य आवश्यकताएँ आधिकारिक BIS स्रोतों से जाँचें।',
    te: 'భారతీయ ప్రమాణం ఉన్న ప్రతి ఉత్పత్తికి BIS ధృవీకరణ అవసరం లేదు. తప్పనిసరి అవసరాలను అధికారిక BIS మూలాల నుండి తనిఖీ చేయండి.',
  },

  // ── Demo standard: IS 50005 ──
  'std.std-5005.title': {
    en: 'Demo Textile Product Standard',
    hi: 'डेमो वस्त्र उत्पाद मानक',
    te: 'డెమో వస్త్ర ఉత్పత్తి ప్రమాణం',
  },
  'std.std-5005.description': {
    en: 'Demo record. A prototype standard for textile product specifications. This is illustrative data and not a real BIS standard.',
    hi: 'डेमो रिकॉर्ड। वस्त्र उत्पाद विशिष्टताओं के लिए प्रोटोटाइप मानक। यह उदाहरणात्मक डेटा है, वास्तविक BIS मानक नहीं है।',
    te: 'డెమో రికార్డు. వస్త్ర ఉత్పత్తి విశిష్టతల కోసం ప్రోటోటైప్ ప్రమాణం. ఇది ఉదాహరణ డేటా, వాస్తవ BIS ప్రమాణం కాదు.',
  },
  'std.std-5005.scope': {
    en: 'Demo scope: fibre content, quality and labelling for textile products.',
    hi: 'डेमो क्षेत्र: वस्त्र उत्पादों के लिए फाइबर सामग्री, गुणवत्ता और लेबलिंग।',
    te: 'డెమో పరిధి: వస్త్ర ఉత్పత్తుల కోసం ఫైబర్ కంటెంట్, నాణ్యత మరియు లేబులింగ్.',
  },
  'std.std-5005.certificationNote': {
    en: 'Certification applicability depends on the product and current regulatory framework. Verify with official BIS sources.',
    hi: 'प्रमाणन अनुप्रयोज्यता उत्पाद और वर्तमान नियामक ढांचे पर निर्भर करती है। आधिकारिक BIS स्रोतों से सत्यापित करें।',
    te: 'ధృవీకరణ వర్తింపు ఉత్పత్తి మరియు ప్రస్తుత నియంత్రణ వ్యవస్థపై ఆధారపడి ఉంటుంది. అధికారిక BIS మూలాల నుండి ధృవీకరించండి.',
  },

  // ── Demo standard: IS 60006 ──
  'std.std-6006.title': {
    en: 'Demo Water Purifier Standard',
    hi: 'डेमो जल शोधक मानक',
    te: 'డెమో జల శుద్ధి ప్రమాణం',
  },
  'std.std-6006.description': {
    en: 'Demo record. A prototype standard for water purifier performance and safety. This is illustrative data and not a real BIS standard.',
    hi: 'डेमो रिकॉर्ड। जल शोधक प्रदर्शन और सुरक्षा के लिए प्रोटोटाइप मानक। यह उदाहरणात्मक डेटा है, वास्तविक BIS मानक नहीं है।',
    te: 'డెమో రికార్డు. జల శుద్ధి పనితీరు మరియు భద్రత కోసం ప్రోటోటైప్ ప్రమాణం. ఇది ఉదాహరణ డేటా, వాస్తవ BIS ప్రమాణం కాదు.',
  },
  'std.std-6006.scope': {
    en: 'Demo scope: performance, safety and filtration requirements for household water purifiers.',
    hi: 'डेमो क्षेत्र: घरेलू जल शोधकों के लिए प्रदर्शन, सुरक्षा और निस्पंदन आवश्यकताएँ।',
    te: 'డెమో పరిధి: గృహ జల శుద్ధి పరికరాల కోసం పనితీరు, భద్రత మరియు ఫిల్టరేషన్ అవసరాలు.',
  },
  'std.std-6006.certificationNote': {
    en: 'Confirm whether this product category is under mandatory certification via official BIS sources.',
    hi: 'इस उत्पाद श्रेणी के अनिवार्य प्रमाणन अंतर्गत होने की पुष्टि आधिकारिक BIS स्रोतों से करें।',
    te: 'ఈ ఉత్పత్తి వర్గం తప్పనిసరి ధృవీకరణ కింద ఉందో లేదో అధికారిక BIS మూలాల నుండి నిర్ధారించండి.',
  },

  // ── Demo standard: IS 70007 ──
  'std.std-7007.title': {
    en: 'Demo Steel Product Standard',
    hi: 'डेमो इस्पात उत्पाद मानक',
    te: 'డెమో ఉక్కు ఉత్పత్తి ప్రమాణం',
  },
  'std.std-7007.description': {
    en: 'Demo record. A prototype standard for steel product specifications. This is illustrative data and not a real BIS standard.',
    hi: 'डेमो रिकॉर्ड। इस्पात उत्पाद विशिष्टताओं के लिए प्रोटोटाइप मानक। यह उदाहरणात्मक डेटा है, वास्तविक BIS मानक नहीं है।',
    te: 'డెమో రికార్డు. ఉక్కు ఉత్పత్తి విశిష్టతల కోసం ప్రోటోటైప్ ప్రమాణం. ఇది ఉదాహరణ డేటా, వాస్తవ BIS ప్రమాణం కాదు.',
  },
  'std.std-7007.scope': {
    en: 'Demo scope: composition, mechanical properties and testing for steel products.',
    hi: 'डेमो क्षेत्र: इस्पात उत्पादों के लिए संरचना, यांत्रिक गुण और परीक्षण।',
    te: 'డెమో పరిధి: ఉక్కు ఉత్పత్తుల కోసం నిర్మాణం, యాంత్రిక లక్షణాలు మరియు పరీక్ష.',
  },
  'std.std-7007.certificationNote': {
    en: 'Some steel products may be covered by Quality Control Orders. Verify current requirements with official BIS sources.',
    hi: 'कुछ इस्पात उत्पाद गुणवत्ता नियंत्रण आदेशों के अंतर्गत हो सकते हैं। वर्तमान आवश्यकताओं को आधिकारिक BIS स्रोतों से सत्यापित करें।',
    te: 'కొన్ని ఉక్కు ఉత్పత్తులు నాణ్యత నియంత్రణ ఉత్తర్వుల కింద ఉండవచ్చు. ప్రస్తుత అవసరాలను అధికారిక BIS మూలాల నుండి ధృవీకరించండి.',
  },

  // ── Demo standard: IS 80008 ──
  'std.std-8008.title': {
    en: 'Demo Toy Safety Standard',
    hi: 'डेमो खिलौना सुरक्षा मानक',
    te: 'డెమో బొమ్మ భద్రతా ప్రమాణం',
  },
  'std.std-8008.description': {
    en: 'Demo record. A prototype standard for toy safety requirements. This is illustrative data and not a real BIS standard.',
    hi: 'डेमो रिकॉर्ड। खिलौना सुरक्षा आवश्यकताओं के लिए प्रोटोटाइप मानक। यह उदाहरणात्मक डेटा है, वास्तविक BIS मानक नहीं है।',
    te: 'డెమో రికార్డు. బొమ్మ భద్రతా అవసరాల కోసం ప్రోటోటైప్ ప్రమాణం. ఇది ఉదాహరణ డేటా, వాస్తవ BIS ప్రమాణం కాదు.',
  },
  'std.std-8008.scope': {
    en: 'Demo scope: mechanical, chemical and flammability safety for toys.',
    hi: 'डेमो क्षेत्र: खिलौनों के लिए यांत्रिक, रासायनिक और ज्वलनशीलता सुरक्षा।',
    te: 'డెమో పరిధి: బొమ్మల కోసం యాంత్రిక, రసాయనిక మరియు మండే భద్రత.',
  },
  'std.std-8008.certificationNote': {
    en: 'Toy certification may be mandatory under specific regulations. Verify applicability with official BIS sources.',
    hi: 'खिलौना प्रमाणन विशिष्ट नियमों के तहत अनिवार्य हो सकता है। अनुप्रयोज्यता आधिकारिक BIS स्रोतों से सत्यापित करें।',
    te: 'బొమ్మ ధృవీకరణ నిర్దిష్ట నిబంధనల కింద తప్పనిసరి అయ్యే అవకాశం ఉంది. వర్తింపును అధికారిక BIS మూలాల నుండి ధృవీకరించండి.',
  },

  // ── Verified standard: IS 1417 ──
  'std.std-is1417.title': {
    en: 'Gold and Gold Alloys, Jewellery/Artefacts - Fineness and Marking',
    hi: 'स्वर्ण और स्वर्ण मिश्र धातु, आभूषण/कलाकृतियाँ - शुद्धता और अंकन',
    te: 'బంగారం మరియు బంగారం మిశ్రమ లోహాలు, నగలు/కళాఖండాలు - శుద్ధత మరియు గుర్తింపు',
  },
  'std.std-is1417.description': {
    en: 'Demo Standard Reference. IS 1417 relates to gold and gold alloys, jewellery/artefacts — fineness and marking. Referenced by official BIS Hallmarking FAQ material. Verify latest details on Official BIS.',
    hi: 'डेमो मानक संदर्भ। IS 1417 स्वर्ण और स्वर्ण मिश्र धातु, आभूषण/कलाकृतियों — शुद्धता और अंकन से संबंधित है। आधिकारिक BIS हॉलमार्किंग FAQ सामग्री द्वारा संदर्भित। नवीनतम जानकारी आधिकारिक BIS पर सत्यापित करें।',
    te: 'డెమో ప్రమాణం సూచన. IS 1417 బంగారం మరియు బంగారం మిశ్రమ లోహాలు, నగలు/కళాఖండాలు — శుద్ధత మరియు గుర్తింపుకు సంబంధించినది. అధికారిక BIS హాల్‌మార్కింగ్ FAQ సామగ్రి ద్వారా సూచించబడింది. తాజా వివరాలను అధికారిక BIS లో ధృవీకరించండి.',
  },
  'std.std-is1417.scope': {
    en: 'Demo reference only. Scope details are not included in this prototype. Verify the current scope on the official BIS website.',
    hi: 'केवल डेमो संदर्भ। परिक्षेत्र विवरण इस प्रोटोटाइप में शामिल नहीं है। वर्तमान परिक्षेत्र आधिकारिक BIS वेबसाइट पर सत्यापित करें।',
    te: 'డెమో సూచన మాత్రమే. పరిధి వివరాలు ఈ ప్రోటోటైప్‌లో చేర్చబడలేదు. ప్రస్తుత పరిధిని అధికారిక BIS వెబ్‌సైట్‌లో ధృవీకరించండి.',
  },
  'std.std-is1417.certificationNote': {
    en: 'Hallmarking of gold articles may be subject to regulatory requirements. Verify current applicability and requirements using official BIS sources.',
    hi: 'स्वर्ण वस्तुओं का हॉलमार्किंग नियामक आवश्यकताओं के अधीन हो सकता है। वर्तमान अनुप्रयोज्यता और आवश्यकताएँ आधिकारिक BIS स्रोतों का उपयोग करके सत्यापित करें।',
    te: 'బంగారం వస్తువుల హాల్‌మార్కింగ్ నియంత్రణ అవసరాలకు లోబడి ఉండవచ్చు. ప్రస్తుత వర్తింపు మరియు అవసరాలను అధికారిక BIS మూలాలను ఉపయోగించి ధృవీకరించండి.',
  },

  // ── Verified standard: IS 2112 ──
  'std.std-is2112.title': {
    en: 'Silver and Silver Alloys, Jewellery/Artefacts - Fineness and Marking',
    hi: 'रजत और रजत मिश्र धातु, आभूषण/कलाकृतियाँ - शुद्धता और अंकन',
    te: 'వెండి మరియు వెండి మిశ్రమ లోహాలు, నగలు/కళాఖండాలు - శుద్ధత మరియు గుర్తింపు',
  },
  'std.std-is2112.description': {
    en: 'Demo Standard Reference. IS 2112 relates to silver and silver alloys, jewellery/artefacts — fineness and marking. Referenced by official BIS Hallmarking FAQ material. Verify latest details on Official BIS.',
    hi: 'डेमो मानक संदर्भ। IS 2112 रजत और रजत मिश्र धातु, आभूषण/कलाकृतियों — शुद्धता और अंकन से संबंधित है। आधिकारिक BIS हॉलमार्किंग FAQ सामग्री द्वारा संदर्भित। नवीनतम जानकारी आधिकारिक BIS पर सत्यापित करें।',
    te: 'డెమో ప్రమాణం సూచన. IS 2112 వెండి మరియు వెండి మిశ్రమ లోహాలు, నగలు/కళాఖండాలు — శుద్ధత మరియు గుర్తింపుకు సంబంధించినది. అధికారిక BIS హాల్‌మార్కింగ్ FAQ సామగ్రి ద్వారా సూచించబడింది. తాజా వివరాలను అధికారిక BIS లో ధృవీకరించండి.',
  },
  'std.std-is2112.scope': {
    en: 'Demo reference only. Scope details are not included in this prototype. Verify the current scope on the official BIS website.',
    hi: 'केवल डेमो संदर्भ। परिक्षेत्र विवरण इस प्रोटोटाइप में शामिल नहीं है। वर्तमान परिक्षेत्र आधिकारिक BIS वेबसाइट पर सत्यापित करें।',
    te: 'డెమో సూచన మాత్రమే. పరిధి వివరాలు ఈ ప్రోటోటైప్‌లో చేర్చబడలేదు. ప్రస్తుత పరిధిని అధికారిక BIS వెబ్‌సైట్‌లో ధృవీకరించండి.',
  },
  'std.std-is2112.certificationNote': {
    en: 'Hallmarking of silver articles may be subject to regulatory requirements. Verify current applicability and requirements using official BIS sources.',
    hi: 'रजत वस्तुओं का हॉलमार्किंग नियामक आवश्यकताओं के अधीन हो सकता है। वर्तमान अनुप्रयोज्यता और आवश्यकताएँ आधिकारिक BIS स्रोतों का उपयोग करके सत्यापित करें।',
    te: 'వెండి వస్తువుల హాల్‌మార్కింగ్ నియంత్రణ అవసరాలకు లోబడి ఉండవచ్చు. ప్రస్తుత వర్తింపు మరియు అవసరాలను అధికారిక BIS మూలాలను ఉపయోగించి ధృవీకరించండి.',
  },

  // ── Verified standard: IS 15820 ──
  'std.std-is15820.title': {
    en: 'General Requirements for establishment and operation of Assaying and Hallmarking Centres',
    hi: 'असेइंग और हॉलमार्किंग केंद्रों की स्थापना और संचालन के लिए सामान्य आवश्यकताएँ',
    te: 'అసేయింగ్ మరియు హాల్‌మార్కింగ్ కేంద్రాల స్థాపన మరియు నిర్వహణకు సాధారణ అవసరాలు',
  },
  'std.std-is15820.description': {
    en: 'Demo Standard Reference. IS 15820 relates to general requirements for establishment and operation of assaying and hallmarking centres. Referenced by official BIS Hallmarking FAQ material. Verify latest details on Official BIS.',
    hi: 'डेमो मानक संदर्भ। IS 15820 असेइंग और हॉलमार्किंग केंद्रों की स्थापना और संचालन के लिए सामान्य आवश्यकताओं से संबंधित है। आधिकारिक BIS हॉलमार्किंग FAQ सामग्री द्वारा संदर्भित। नवीनतम जानकारी आधिकारिक BIS पर सत्यापित करें।',
    te: 'డెమో ప్రమాణం సూచన. IS 15820 అసేయింగ్ మరియు హాల్‌మార్కింగ్ కేంద్రాల స్థాపన మరియు నిర్వహణకు సాధారణ అవసరాలకు సంబంధించినది. అధికారిక BIS హాల్‌మార్కింగ్ FAQ సామగ్రి ద్వారా సూచించబడింది. తాజా వివరాలను అధికారిక BIS లో ధృవీకరించండి.',
  },
  'std.std-is15820.scope': {
    en: 'Demo reference only. Scope details are not included in this prototype. Verify the current scope on the official BIS website.',
    hi: 'केवल डेमो संदर्भ। परिक्षेत्र विवरण इस प्रोटोटाइप में शामिल नहीं है। वर्तमान परिक्षेत्र आधिकारिक BIS वेबसाइट पर सत्यापित करें।',
    te: 'డెమో సూచన మాత్రమే. పరిధి వివరాలు ఈ ప్రోటోటైప్‌లో చేర్చబడలేదు. ప్రస్తుత పరిధిని అధికారిక BIS వెబ్‌సైట్‌లో ధృవీకరించండి.',
  },
  'std.std-is15820.certificationNote': {
    en: 'Assaying and hallmarking centres operate under BIS requirements. Verify current requirements using official BIS sources.',
    hi: 'असेइंग और हॉलमार्किंग केंद्र BIS आवश्यकताओं के अंतर्गत संचालित होते हैं। वर्तमान आवश्यकताएँ आधिकारिक BIS स्रोतों का उपयोग करके सत्यापित करें।',
    te: 'అసేయింగ్ మరియు హాల్‌మార్కింగ్ కేంద్రాలు BIS అవసరాల కింద నిర్వహించబడతాయి. ప్రస్తుత అవసరాలను అధికారిక BIS మూలాలను ఉపయోగించి ధృవీకరించండి.',
  },

  // ── Navbar ──
  'nav.home': { en: 'Home', hi: 'होम', te: 'హోమ్' },
  'nav.standards': { en: 'Standards', hi: 'मानक', te: 'ప్రమాణాలు' },
  'nav.certification': { en: 'Certification', hi: 'प्रमाणन', te: 'ధృవీకరణ' },
  'nav.services': { en: 'Services', hi: 'सेवाएँ', te: 'సేవలు' },
  'nav.about': { en: 'About', hi: 'परिचय', te: 'గురించి' },
  'nav.consumer': { en: 'Consumer', hi: 'उपभोक्ता', te: 'వినియోగదారు' },
  'nav.industry': { en: 'Industry', hi: 'उद्योग', te: 'పరిశ్రమ' },
  'nav.askAssistant': { en: 'Ask Assistant', hi: 'सहायक से पूछें', te: 'అసిస్టెంట్‌ను అడగండి' },
  'nav.toggleMenu': { en: 'Toggle menu', hi: 'मेनू टॉगल करें', te: 'మెనూ టాగల్' },
  'nav.selectLanguage': { en: 'Select language', hi: 'भाषा चुनें', te: 'భాష ఎంచుకోండి' },
  'nav.brand': {
    en: 'BIS Intelligent Assistant',
    hi: 'बीआईएस इंटेलिजेंट असिस्टेंट',
    te: 'బిఐఎస్ ఇంటెలిజెంట్ అసిస్టెంట్',
  },

  // ── Footer ──
  'footer.tagline': {
    en: 'AI-powered assistance for Indian Standards and BIS services.',
    hi: 'भारतीय मानकों और बीआईएस सेवाओं के लिए एआई-संचालित सहायता।',
    te: 'భారతీయ ప్రమాణాలు మరియు బిఐఎస్ సేవల కోసం ఏఐ-ఆధారిత సహాయం.',
  },
  'footer.sihNotice': {
    en: 'Prototype for Smart India Hackathon 2026 — SIH26107',
    hi: 'स्मार्ट इंडिया हैकाथन 2026 — SIH26107 के लिए प्रोटोटाइप',
    te: 'స్మార్ట్ ఇండియా హాకథాన్ 2026 — SIH26107 కోసం ప్రోటోటైప్',
  },
  'footer.disclaimer': {
    en: 'Demo data only. Not affiliated with or endorsed by the Bureau of Indian Standards.',
    hi: 'केवल डेमो डेटा। भारतीय मानक ब्यूरो के साथ संबद्ध या समर्थित नहीं है।',
    te: 'డెమో డేటా మాత్రమే. బ్యూరో ఆఫ్ ఇండియన్ స్టాండర్డ్స్‌తో అనుబంధం లేదా ఆమోదం లేదు.',
  },

  // ── Home page ──
  'home.sihBadge': { en: 'SIH26107 · Smart India Hackathon 2026', hi: 'SIH26107 · स्मार्ट इंडिया हैकाथन 2026', te: 'SIH26107 · స్మార్ట్ ఇండియా హాకథాన్ 2026' },
  'home.heroTitle': {
    en: 'Your Intelligent Assistant for BIS Standards & Services',
    hi: 'बीआईएस मानकों और सेवाओं के लिए आपका इंटेलिजेंट असिस्टेंट',
    te: 'బిఐఎస్ ప్రమాణాలు మరియు సేవల కోసం మీ ఇంటెలిజెంట్ అసిస్టెంట్',
  },
  'home.heroDesc': {
    en: 'Understand Indian Standards, certification requirements, and BIS services through simple, AI-powered guidance.',
    hi: 'भारतीय मानकों, प्रमाणन आवश्यकताओं और बीआईएस सेवाओं को सरल, एआई-संचालित मार्गदर्शन के माध्यम से समझें।',
    te: 'సరళమైన, ఏఐ-ఆధారిత మార్గదర్శకం ద్వారా భారతీయ ప్రమాణాలు, ధృవీకరణ అవసరాలు మరియు బిఐఎస్ సేవలను అర్థం చేసుకోండి.',
  },
  'home.askBisAssistant': { en: 'Ask BIS Assistant', hi: 'बीआईएस सहायक से पूछें', te: 'బిఐఎస్ అసిస్టెంట్‌ను అడగండి' },
  'home.exploreStandards': { en: 'Explore Standards', hi: 'मानक खोजें', te: 'ప్రమాణాలను అన్వేషించండి' },
  'home.sourceAware': { en: 'Source-aware', hi: 'स्रोत-जागरूक', te: 'మూలం-స్పృహ' },
  'home.consumerFriendly': { en: 'Consumer-friendly', hi: 'उपभोक्ता-अनुकूल', te: 'వినియోగదారు-అనుకూల' },
  'home.industryFocused': { en: 'Industry-focused', hi: 'उद्योग-केंद्रित', te: 'పరిశ్రమ-కేంద్రీకృత' },
  'home.tagline': {
    en: 'Source-aware • Consumer-friendly • Industry-focused',
    hi: 'स्रोत-जागरूक • उपभोक्ता-अनुकूल • उद्योग-केंद्रित',
    te: 'మూలం-స్పృహ • వినియోగదారు-అనుకూల • పరిశ్రమ-కేంద్రీకృత',
  },
  'home.whoAreYou': { en: 'Who are you?', hi: 'आप कौन हैं?', te: 'మీరు ఎవరు?' },
  'home.whoAreYouDesc': { en: 'Choose the experience tailored to your needs.', hi: 'अपनी आवश्यकताओं के अनुरूप अनुभव चुनें।', te: 'మీ అవసరాలకు అనుగుణమైన అనుభవాన్ని ఎంచుకోండి.' },
  'home.consumerTitle': { en: 'CONSUMER', hi: 'उपभोक्ता', te: 'వినియోగదారు' },
  'home.consumerDesc': {
    en: 'Understand BIS marks, product certification, standards and consumer services in simple language.',
    hi: 'बीआईएस मार्क, उत्पाद प्रमाणन, मानक और उपभोक्ता सेवाओं को सरल भाषा में समझें।',
    te: 'బిఐఎస్ గుర్తులు, ఉత్పత్తి ధృవీకరణ, ప్రమాణాలు మరియు వినియోగదారు సేవలను సరళ భాషలో అర్థం చేసుకోండి.',
  },
  'home.continueConsumer': { en: 'Continue as Consumer', hi: 'उपभोक्ता के रूप में जारी रखें', te: 'వినియోగదారుగా కొనసాగంచండి' },
  'home.industryTitle': { en: 'INDUSTRY / MANUFACTURER', hi: 'उद्योग / निर्माता', te: 'పరిశ్రమ / తయారీదారు' },
  'home.industryDesc': {
    en: 'Explore standards, certification procedures, documentation, testing and BIS services.',
    hi: 'मानक, प्रमाणन प्रक्रिया, दस्तावेज़ीकरण, परीक्षण और बीआईएस सेवाओं का अन्वेषण करें।',
    te: 'ప్రమాణాలు, ధృవీకరణ ప్రక్రియలు, డాక్యుమెంటేషన్, పరీక్ష మరియు బిఐఎస్ సేవలను అన్వేషించండి.',
  },
  'home.continueIndustry': { en: 'Continue as Industry', hi: 'उद्योग के रूप में जारी रखें', te: 'పరిశ్రమగా కొనసాగంచండి' },
  'home.featureSourceAwareTitle': { en: 'Source-aware', hi: 'स्रोत-जागरूक', te: 'మూలం-స్పృహ' },
  'home.featureSourceAwareDesc': {
    en: 'Every answer is designed to cite verified BIS sources. Demo sources are clearly labelled.',
    hi: 'प्रत्येक उत्तर सत्यापित बीआईएस स्रोतों का उल्लेख करने के लिए डिज़ाइन किया गया है। डेमो स्रोत स्पष्ट रूप से लेबल किए गए हैं।',
    te: 'ప్రతి సమాధానం ధృవీకరించబడిన బిఐఎస్ మూలాలను ఉదహరించడానికి రూపొందించబడింది. డెమో మూలాలు స్పష్టంగా లేబుల్ చేయబడ్డాయి.',
  },
  'home.featureStandardsSearchTitle': { en: 'Standards search', hi: 'मानक खोज', te: 'ప్రమాణాల శోధన' },
  'home.featureStandardsSearchDesc': {
    en: 'Search demo Indian Standards by product, number or keyword. Ready for real data.',
    hi: 'उत्पाद, संख्या या कीवर्ड द्वारा डेमो भारतीय मानक खोजें। वास्तविक डेटा के लिए तैयार।',
    te: 'ఉత్పత్తి, సంఖ్య లేదా కీవర్డ్ ద్వారా డెమో భారతీయ ప్రమాణాలను వెతకండి. వాస్తవ డేటాకు సిద్ధంగా ఉంది.',
  },
  'home.featureAiGuidanceTitle': { en: 'AI-powered guidance', hi: 'एआई-संचालित मार्गदर्शन', te: 'ఏఐ-ఆధారిత మార్గదర్శకం' },
  'home.featureAiGuidanceDesc': {
    en: 'Consumer and industry modes deliver tailored, plain-language assistance.',
    hi: 'उपभोक्ता और उद्योग मोड अनुरूप, सरल-भाषा सहायता प्रदान करते हैं।',
    te: 'వినియోగదారు మరియు పరిశ్రమ మోడ్‌లు అనుగుణమైన, సరళ-భాష సహాయాన్ని అందిస్తాయి.',
  },
  'home.ctaTitle': {
    en: 'Ready to explore BIS standards and services?',
    hi: 'बीआईएस मानकों और सेवाओं का अन्वेषण करने के लिए तैयार हैं?',
    te: 'బిఐఎస్ ప్రమాణాలు మరియు సేవలను అన్వేషించడానికి సిద్ధంగా ఉన్నారా?',
  },
  'home.ctaDesc': {
    en: 'Try the assistant now with demo responses, or browse the standards catalogue.',
    hi: 'डेमो प्रतिक्रियाओं के साथ अभी सहायक आज़माएँ, या मानक सूची ब्राउज़ करें।',
    te: 'డెమో ప్రతిస్పందనలతో ఇప్పుడే అసిస్టెంట్‌ను ప్రయత్నించండి, లేదా ప్రమాణాల జాబితాను బ్రౌజ్ చేయండి.',
  },
  'home.ctaAskAssistant': { en: 'Ask BIS Assistant', hi: 'बीआईएस सहायक से पूछें', te: 'బిఐఎస్ అసిస్టెంట్‌ను అడగండి' },
  'home.ctaViewCert': { en: 'View Certification Process', hi: 'प्रमाणन प्रक्रिया देखें', te: 'ధృవీకరణ ప్రక్రియ చూడండి' },

  // ── Certification page ──
  'cert.title': { en: 'BIS Certification', hi: 'बीआईएस प्रमाणन', te: 'బిఐఎస్ ధృవీకరణ' },
  'cert.desc': {
    en: 'An overview of what BIS certification means and how the conformity assessment process works.',
    hi: 'बीआईएस प्रमाणन का क्या अर्थ है और अनुरूपता मूल्यांकन प्रक्रिया कैसे काम करती है, इसका अवलोकन।',
    te: 'బిఐఎస్ ధృవీకరణ అంటే ఏమిటి మరియు అనురూపత మూల్యాంకన ప్రక్రియ ఎలా పనిచేస్తుందో అవలోకనం.',
  },
  'cert.card1Title': { en: 'What BIS certification means', hi: 'बीआईएस प्रमाणन का अर्थ', te: 'బిఐఎస్ ధృవీకరణ అర్థం' },
  'cert.card1Desc': {
    en: 'A process through which a manufacturer demonstrates that a product conforms to a relevant Indian Standard.',
    hi: 'एक प्रक्रिया जिसके माध्यम से एक निर्माता प्रदर्शित करता है कि उत्पाद एक प्रासंगिक भारतीय मानक के अनुरूप है।',
    te: 'ఒక తయారీదారు ఉత్పత్తి సంబంధిత భారతీయ ప్రమాణానికి అనుగుణంగా ఉందని ప్రదర్శించే ప్రక్రియ.',
  },
  'cert.card2Title': { en: 'Why conformity assessment matters', hi: 'अनुरूपता मूल्यांकन क्यों महत्वपूर्ण है', te: 'అనురూపత మూల్యాంకనం ఎందుకు ముఖ్యం' },
  'cert.card2Desc': {
    en: 'It builds trust in product quality and safety for consumers, regulators and markets.',
    hi: 'यह उपभोक्ताओं, नियामकों और बाज़ारों के लिए उत्पाद गुणवत्ता और सुरक्षा में विश्वास बनाता है।',
    te: 'ఇది వినియోగదారులు, నియంత్రణదారులు మరియు మార్కెట్‌ల కోసం ఉత్పత్తి నాణ్యత మరియు భద్రతలో నమ్మకాన్ని నిర్మిస్తుంది.',
  },
  'cert.card3Title': { en: 'Exploring applicable requirements', hi: 'लागू आवश्यकताओं का अन्वेषण', te: 'వర్తించే అవసరాలను అన్వేషించడం' },
  'cert.card3Desc': {
    en: 'Manufacturers should identify the applicable standard, scheme and any regulatory requirement.',
    hi: 'निर्माताओं को लागू मानक, योजना और किसी भी नियामक आवश्यकता की पहचान करनी चाहिए।',
    te: 'తయారీదారులు వర్తించే ప్రమాణం, పథకం మరియు ఏదైనా నియంత్రణ అవసరాన్ని గుర్తించాలి.',
  },
  'cert.card4Title': { en: 'Testing', hi: 'परीक्षण', te: 'పరీక్ష' },
  'cert.card4Desc': {
    en: 'Products are typically tested in recognised laboratories against the requirements of the applicable standard.',
    hi: 'उत्पादों का परीक्षण आमतौर पर मान्यता प्राप्त प्रयोगशालाओं में लागू मानक की आवश्यकताओं के विरुद्ध किया जाता है।',
    te: 'ఉత్పత్తులను సాధారణంగా గుర్తింపు పొందిన ప్రయోగశాలలలో వర్తించే ప్రమాణం అవసరాలకు వ్యతిరేకంగా పరీక్షిస్తారు.',
  },
  'cert.card5Title': { en: 'Inspection / assessment', hi: 'निरीक्षण / मूल्यांकन', te: 'తనిఖీ / మూల్యాంకనం' },
  'cert.card5Desc': {
    en: 'BIS may conduct factory inspections and quality system assessments as part of the process.',
    hi: 'बीआईएस प्रक्रिया के हिस्से के रूप में फ़ैक्टरी निरीक्षण और गुणवत्ता प्रणाली मूल्यांकन आयोजित कर सकता है।',
    te: 'బిఐఎస్ ప్రక్రియలో భాగంగా కర్మాగార తనిఖీలు మరియు నాణ్యత వ్యవస్థ మూల్యాంకనాలను నిర్వహించవచ్చు.',
  },
  'cert.card6Title': { en: 'Documentation & application', hi: 'दस्तावेज़ीकरण और आवेदन', te: 'డాక్యుమెంటేషన్ మరియు దరఖాస్తు' },
  'cert.card6Desc': {
    en: 'Documentation such as test reports, factory details and application forms is submitted to BIS.',
    hi: 'परीक्षण रिपोर्ट, फ़ैक्टरी विवरण और आवेदन फॉर्म जैसे दस्तावेज़ बीआईएस को प्रस्तुत किए जाते हैं।',
    te: 'పరీక్ష నివేదికలు, కర్మాగార వివరాలు మరియు దరఖాస్తు ఫారమ్‌ల వంటి డాక్యుమెంటేషన్ బిఐఎస్‌కు సమర్పించబడుతుంది.',
  },
  'cert.processTitle': { en: 'Certification Process Overview', hi: 'प्रमाणन प्रक्रिया अवलोकन', te: 'ధృవీకరణ ప్రక్రియ అవలోకనం' },
  'cert.step1Title': { en: 'Identify the product', hi: 'उत्पाद की पहचान करें', te: 'ఉత్పత్తిని గుర్తించండి' },
  'cert.step1Desc': { en: 'Define your product and its intended use clearly.', hi: 'अपने उत्पाद और इसके �意图ित उपयोग को स्पष्ट रूप से परिभाषित करें।', te: 'మీ ఉత్పత్తి మరియు దాని ఉద్దేశించిన ఉపయోగాన్ని స్పష్టంగా నిర్వచించండి.' },
  'cert.step2Title': { en: 'Identify applicable standard / regulatory requirement', hi: 'लागू मानक / नियामक आवश्यकता की पहचान करें', te: 'వర్తించే ప్రమాణం / నియంత్రణ అవసరాన్ని గుర్తించండి' },
  'cert.step2Desc': {
    en: 'Find the relevant Indian Standard and check for any regulatory requirement such as a QCO.',
    hi: 'संबंधित भारतीय मानक खोजें और QCO जैसी किसी नियामक आवश्यकता की जाँच करें।',
    te: 'సంబంధిత భారతీయ ప్రమాణాన్ని కనుగొనండి మరియు QCO వంటి ఏదైనా నియంత్రణ అవసరాన్ని తనిఖీ చేయండి.',
  },
  'cert.step3Title': { en: 'Check applicable conformity assessment scheme', hi: 'लागू अनुरूपता मूल्यांकन योजना जाँचें', te: 'వర్తించే అనురూపత మూల్యాంకన పథకాన్ని తనిఖీ చేయండి' },
  'cert.step3Desc': {
    en: 'Determine which BIS certification scheme applies to your product.',
    hi: 'निर्धारित करें कि आपके उत्पाद पर कौन सी बीआईएस प्रमाणन योजना लागू होती है।',
    te: 'మీ ఉత్పత్తికి ఏ బిఐఎస్ ధృవీకరణ పథకం వర్తిస్తుందో నిర్ణయించండి.',
  },
  'cert.step4Title': { en: 'Testing / assessment', hi: 'परीक्षण / मूल्यांकन', te: 'పరీక్ష / మూల్యాంకనం' },
  'cert.step4Desc': {
    en: 'Product testing in recognised labs and factory assessment as applicable.',
    hi: 'मान्यता प्राप्त प्रयोगशालाओं में उत्पाद परीक्षण और लागू होने पर फ़ैक्टरी मूल्यांकन।',
    te: 'గుర్తింపు ప్రయోగశాలలలో ఉత్పత్తి పరీక్ష మరియు వర్తించినట్లుగా కర్మాగార మూల్యాంకనం.',
  },
  'cert.step5Title': { en: 'Documentation and application', hi: 'दस्तावेज़ीकरण और आवेदन', te: 'డాక్యుమెంటేషన్ మరియు దరఖాస్తు' },
  'cert.step5Desc': {
    en: 'Prepare required documents and submit the application to BIS.',
    hi: 'आवश्यक दस्तावेज़ तैयार करें और बीआईएस को आवेदन प्रस्तुत करें।',
    te: 'అవసరమైన డాక్యుమెంట్‌లను సిద్ధం చేసి బిఐఎస్‌కు దరఖాస్తు సమర్పించండి.',
  },
  'cert.step6Title': { en: 'BIS assessment / decision', hi: 'बीआईएस मूल्यांकन / निर्णय', te: 'బిఐఎస్ మూల్యాంకనం / నిర్ణయం' },
  'cert.step6Desc': {
    en: 'BIS conducts assessment and grants certification if requirements are met.',
    hi: 'बीआईएस मूल्यांकन आयोजित करता है और आवश्यकताएँ पूरी होने पर प्रमाणन प्रदान करता है।',
    te: 'బిఐఎస్ మూల్యాంకనం నిర్వహిస్తుంది మరియు అవసరాలు తీరితే ధృవీకరణ మంజూరు చేస్తుంది.',
  },
  'cert.disclaimer': {
    en: 'Exact requirements depend on the product, applicable Indian Standard, conformity assessment scheme and current regulatory requirements. Verify current requirements using official BIS sources.',
    hi: 'सटीक आवश्यकताएँ उत्पाद, लागू भारतीय मानक, अनुरूपता मूल्यांकन योजना और वर्तमान नियामक आवश्यकताओं पर निर्भर करती हैं। वर्तमान आवश्यकताओं को आधिकारिक बीआईएस स्रोतों का उपयोग करके सत्यापित करें।',
    te: 'ఖచ్చిత అవసరాలు ఉత్పత్తి, వర్తించే భారతీయ ప్రమాణం, అనురూపత మూల్యాంకన పథకం మరియు ప్రస్తుత నియంత్రణ అవసరాలపై ఆధారపడి ఉంటాయి. ప్రస్తుత అవసరాలను అధికారిక బిఐఎస్ మూలాలను ఉపయోగించి ధృవీకరించండి.',
  },
  'cert.askAssistant': { en: 'Ask Assistant About Certification', hi: 'प्रमाणन के बारे में सहायक से पूछें', te: 'ధృవీకరణ గురించి అసిస్టెంట్‌ను అడగండి' },
  'cert.distinctionTitle': { en: 'Important distinction', hi: 'महत्वपूर्ण अंतर', te: 'ముఖ్యమైన భేదం' },
  'cert.distinction1': {
    en: 'An Indian Standard existing for a product does not automatically require BIS certification.',
    hi: 'किसी उत्पाद के लिए भारतीय मानक का होना स्वतः बीआईएस प्रमाणन आवश्यक नहीं बनाता।',
    te: 'ఉత్పత్తికి భారతీయ ప్రమాణం ఉండటం స్వయంచాలకంగా బిఐఎస్ ధృవీకరణను అవసరించదు.',
  },
  'cert.distinction2': {
    en: 'Certification may be voluntary under a BIS scheme.',
    hi: 'प्रमाणन बीआईएस योजना के तहत स्वैच्छिक हो सकता है।',
    te: 'ధృవీకరణ బిఐఎస్ పథకం కింద స్వచ్ఛంగా ఉండవచ్చు.',
  },
  'cert.distinction3': {
    en: 'Certification may be mandatory where a regulatory requirement (such as a Quality Control Order) applies.',
    hi: 'जहाँ नियामक आवश्यकता (जैसे गुणवत्ता नियंत्रण आदेश) लागू होती है, वहाँ प्रमाणन अनिवार्य हो सकता है।',
    te: 'నియంత్రణ అవసరం (నాణ్యత నియంత్రణ ఉత్తర్వు వంటిది) వర్తించేచో ధృవీకరణ తప్పనిసరి అయ్యే అవకాశం ఉంది.',
  },

  // ── Services page ──
  'services.title': { en: 'BIS Services', hi: 'बीआईएस सेवाएँ', te: 'బిఐఎస్ సేవలు' },
  'services.desc': {
    en: 'Explore the range of BIS services for consumers and industries.',
    hi: 'उपभोक्ताओं और उद्योगों के लिए बीआईएस सेवाओं की श्रेणी का अन्वेषण करें।',
    te: 'వినియోగదారులు మరియు పరిశ్రమల కోసం బిఐఎస్ సేవల శ్రేణిని అన్వేషించండి.',
  },
  'services.s1Title': { en: 'Standards', hi: 'मानक', te: 'ప్రమాణాలు' },
  'services.s1Desc': {
    en: 'Search and explore Indian Standards by product, number or keyword.',
    hi: 'उत्पाद, संख्या या कीवर्ड द्वारा भारतीय मानक खोजें और अन्वेषण करें।',
    te: 'ఉత్పత్తి, సంఖ్య లేదా కీవర్డ్ ద్వారా భారతీయ ప్రమాణాలను వెతకండి మరియు అన్వేషించండి.',
  },
  'services.s2Title': { en: 'Product Certification', hi: 'उत्पाद प्रमाणन', te: 'ఉత్పత్తి ధృవీకరణ' },
  'services.s2Desc': {
    en: 'Understand BIS product certification schemes and procedures.',
    hi: 'बीआईएस उत्पाद प्रमाणन योजनाओं और प्रक्रियाओं को समझें।',
    te: 'బిఐఎస్ ఉత్పత్తి ధృవీకరణ పథకాలు మరియు ప్రక్రియలను అర్థం చేసుకోండి.',
  },
  'services.s3Title': { en: 'Registration', hi: 'पंजीकरण', te: 'నమోదం' },
  'services.s3Desc': {
    en: 'Learn about registration-related services and processes.',
    hi: 'पंजीकरण-संबंधित सेवाओं और प्रक्रियाओं के बारे में जानें।',
    te: 'నమోదం-సంబంధిత సేవలు మరియు ప్రక్రియల గురించి తెలుసుకోండి.',
  },
  'services.s4Title': { en: 'Testing / Laboratory Information', hi: 'परीक्षण / प्रयोगशाला जानकारी', te: 'పరీక్ష / ప్రయోగశాల సమాచారం' },
  'services.s4Desc': {
    en: 'Find information about recognised laboratories and testing.',
    hi: 'मान्यता प्राप्त प्रयोगशालाओं और परीक्षण के बारे में जानकारी प्राप्त करें।',
    te: 'గుర్తింపు పొందిన ప్రయోగశాలలు మరియు పరీక్ష గురించి సమాచారం పొందండి.',
  },
  'services.s5Title': { en: 'Consumer Services', hi: 'उपभोक्ता सेवाएँ', te: 'వినియోగదారు సేవలు' },
  'services.s5Desc': {
    en: 'Guidance for consumers on BIS marks, products and rights.',
    hi: 'बीआईएस मार्क, उत्पादों और अधिकारों पर उपभोक्ताओं के लिए मार्गदर्शन।',
    te: 'బిఐఎస్ గుర్తులు, ఉత్పత్తులు మరియు హక్కులపై వినియోగదారుల కోసం మార్గదర్శకం.',
  },
  'services.s6Title': { en: 'Complaints', hi: 'शिकायतें', te: 'ఫిర్యాదులు' },
  'services.s6Desc': {
    en: 'Raise and track consumer complaints about products or certification.',
    hi: 'उत्पादों या प्रमाणन के बारे में उपभोक्ता शिकायतें दर्ज करें और ट्रैक करें।',
    te: 'ఉత్పత్తులు లేదా ధృవీకరణ గురించి వినియోగదారు ఫిర్యాదులను నమోదు చేయండి మరియు ట్రాక్ చేయండి.',
  },
  'services.s7Title': { en: 'Certificate / Licence Verification', hi: 'प्रमाणपत्र / लाइसेंस सत्यापन', te: 'ధృవీకరణ పత్రం / లైసెన్స్ ధృవీకరణ' },
  'services.s7Desc': {
    en: 'Verify the validity of a BIS certificate or licence.',
    hi: 'बीआईएस प्रमाणपत्र या लाइसेंस की वैधता सत्यापित करें।',
    te: 'బిఐఎస్ ధృవీకరణ పత్రం లేదా లైసెన్స్ చెల్లుబాటును ధృవీకరించండి.',
  },
  'services.explore': { en: 'Explore', hi: 'अन्वेषण करें', te: 'అన్వేషించండి' },
  'services.prototypeMessage': {
    en: 'Official BIS service integration will be connected in the next development phase.',
    hi: 'आधिकारिक बीआईएस सेवा एकीकरण अगले विकास चरण में जुड़ा जाएगा।',
    te: 'అధికారిక బిఐఎస్ సేవ ఏకీకరణ తదుపరి అభివృద్ధి దశలో అనుసంధానించబడుతుంది.',
  },

  // ── Consumer page ──
  'consumer.title': { en: 'Consumer Help', hi: 'उपभोक्ता सहायता', te: 'వినియోగదారు సహాయం' },
  'consumer.desc': {
    en: 'Simple, plain-language guidance to help you understand BIS marks, standards and services.',
    hi: 'बीआईएस मार्क, मानक और सेवाओं को समझने में मदद के लिए सरल, स्पष्ट भाषा मार्गदर्शन।',
    te: 'బిఐఎస్ గుర్తులు, ప్రమాణాలు మరియు సేవలను అర్థం చేసుకోవడంలో సహాయం కోసం సరళ, స్పష్ట భాష మార్గదర్శకం.',
  },
  'consumer.card1Title': { en: 'Understand BIS Standard Mark', hi: 'बीआईएस मानक मार्क समझें', te: 'బిఐఎస్ ప్రమాణం గుర్తును అర్థం చేసుకోండి' },
  'consumer.card1Desc': { en: 'Learn what the BIS Standard Mark means and when it applies.', hi: 'बीआईएस मानक मार्क का क्या अर्थ है और यह कब लागू होता है, जानें।', te: 'బిఐఎస్ ప్రమాణం గుర్తు అంటే ఏమిటి మరియు అది ఎప్పుడు వర్తిస్తుందో తెలుసుకోండి.' },
  'consumer.card2Title': { en: 'Verify Certification', hi: 'प्रमाणन सत्यापित करें', te: 'ధృవీకరణను ధృవీకరించండి' },
  'consumer.card2Desc': { en: 'Check whether a product or licence is certified by BIS.', hi: 'जाँचें कि कोई उत्पाद या लाइसेंस बीआईएस द्वारा प्रमाणित है या नहीं।', te: 'ఉత్పత్తి లేదా లైసెన్స్ బిఐఎస్ ద్వారా ధృవీకరించబడిందో లేదో తనిఖీ చేయండి.' },
  'consumer.card3Title': { en: 'Learn About Standards', hi: 'मानकों के बारे में जानें', te: 'ప్రమాణాల గురించి తెలుసుకోండి' },
  'consumer.card3Desc': { en: 'Understand Indian Standards in simple language.', hi: 'भारतीय मानकों को सरल भाषा में समझें।', te: 'భారతీయ ప్రమాణాలను సరళ భాషలో అర్థం చేసుకోండి.' },
  'consumer.card4Title': { en: 'Consumer Complaints', hi: 'उपभोक्ता शिकायतें', te: 'వినియోగదారు ఫిర్యాదులు' },
  'consumer.card4Desc': { en: 'Find guidance on raising complaints about products.', hi: 'उत्पादों के बारे में शिकायत दर्ज करने पर मार्गदर्शन प्राप्त करें।', te: 'ఉత్పత్తుల గురించి ఫిర్యాదులు నమోదు చేయడంపై మార్గదర్శకం పొందండి.' },
  'consumer.card5Title': { en: 'BIS Services', hi: 'बीआईएस सेवाएँ', te: 'బిఐఎస్ సేవలు' },
  'consumer.card5Desc': { en: 'Explore the range of BIS services for consumers.', hi: 'उपभोक्ताओं के लिए बीआईएस सेवाओं की श्रेणी का अन्वेषण करें।', te: 'వినియోగదారుల కోసం బిఐఎస్ సేవల శ్రేణిని అన్వేషించండి.' },
  'consumer.card6Title': { en: 'Ask Assistant', hi: 'सहायक से पूछें', te: 'అసిస్టెంట్‌ను అడగండి' },
  'consumer.card6Desc': { en: 'Ask any question about BIS in your own words.', hi: 'बीआईएस के बारे में अपने शब्दों में कोई भी प्रश्न पूछें।', te: 'బిఐఎస్ గురించి మీ మాటల్లో ఏదైనా ప్రశ్న అడగండి.' },
  'consumer.explore': { en: 'Explore', hi: 'अन्वेषण करें', te: 'అన్వేషించండి' },
  'consumer.menuTitle': { en: 'What are you trying to do?', hi: 'आप क्या करना चाहते हैं?', te: 'మీరు ఏమి చేయదలచుకుంటున్నారు?' },
  'consumer.menuDesc': { en: "Pick an option below and we'll guide you to the right place.", hi: 'नीचे एक विकल्प चुनें और हम आपको सही जगह पर मार्गदर्शन करेंगे।', te: 'కింద ఒక ఎంపికను ఎంచుకోండి మరియు మేము మిమ్మల్ని సరైన స్థలానికి మార్గదర్శనం చేస్తాము.' },
  'consumer.menuOpt1': { en: 'Verify a product', hi: 'उत्पाद सत्यापित करें', te: 'ఉత్పత్తిని ధృవీకరించండి' },
  'consumer.menuOpt2': { en: 'Understand BIS Mark', hi: 'बीआईएस मार्क समझें', te: 'బిఐఎస్ గుర్తును అర్థం చేసుకోండి' },
  'consumer.menuOpt3': { en: 'Learn about a standard', hi: 'मानक के बारे में जानें', te: 'ప్రమాణం గురించి తెలుసుకోండి' },
  'consumer.menuOpt4': { en: 'Consumer complaint', hi: 'उपभोक्ता शिकायत', te: 'వినియోగదారు ఫిర్యాదు' },
  'consumer.menuOpt5': { en: 'Ask a question', hi: 'प्रश्न पूछें', te: 'ఒక ప్రశ్న అడగండి' },

  // ── Industry page ──
  'industry.title': { en: 'Industry & Manufacturer Guidance', hi: 'उद्योग और निर्माता मार्गदर्शन', te: 'పరిశ్రమ మరియు తయారీదారు మార్గదర్శకం' },
  'industry.desc': {
    en: 'Generate a demo guidance plan tailored to your product and needs.',
    hi: 'अपने उत्पाद और आवश्यकताओं के अनुरूप डेमो मार्गदर्शन योजना तैयार करें।',
    te: 'మీ ఉత్పత్తి మరియు అవసరాలకు అనుగుణమైన డెమో మార్గదర్శక ప్రణాళికను రూపొందించండి.',
  },
  'industry.step1': { en: 'Step 1: What product do you manufacture?', hi: 'चरण 1: आप क्या उत्पाद बनाते हैं?', te: 'దశ 1: మీరు ఏ ఉత్పత్తి తయారు చేస్తున్నారు?' },
  'industry.step1Placeholder': { en: 'e.g. Electric water heater, steel pipes, toys…', hi: 'जैसे इलेक्ट्रिक वॉटर हीटर, स्टील पाइप, खिलौने…', te: 'ఉదా. ఎలక్ట్రిక్ వాటర్ హీటర్, స్టీల్ పైపులు, బొమ్మలు…' },
  'industry.step2': { en: 'Step 2: Industry category', hi: 'चरण 2: उद्योग श्रेणी', te: 'దశ 2: పరిశ్రమ వర్గం' },
  'industry.step3': { en: 'Step 3: What do you need?', hi: 'चरण 3: आपको क्या चाहिए?', te: 'దశ 3: మీకు ఏమి కావాలి?' },
  'industry.need1': { en: 'Find applicable standard', hi: 'लागू मानक खोजें', te: 'వర్తించే ప్రమాణం కనుగొనండి' },
  'industry.need2': { en: 'Certification information', hi: 'प्रमाणन जानकारी', te: 'ధృవీకరణ సమాచారం' },
  'industry.need3': { en: 'Documentation', hi: 'दस्तावेज़ीकरण', te: 'డాక్యుమెంటేషన్' },
  'industry.need4': { en: 'Testing information', hi: 'परीक्षण जानकारी', te: 'పరీక్ష సమాచారం' },
  'industry.need5': { en: 'Compliance guidance', hi: 'अनुपालन मार्गदर्शन', te: 'అనుగుణత మార్గదర్శకం' },
  'industry.need6': { en: 'BIS service', hi: 'बीआईएस सेवा', te: 'బిఐఎస్ సేవ' },
  'industry.generate': { en: 'Generate Guidance', hi: 'मार्गदर्शन तैयार करें', te: 'మార్గదర్శకం రూపొందించండి' },
  'industry.resultTitle': { en: 'Demo Guidance Result', hi: 'डेमो मार्गदर्शन परिणाम', te: 'డెమో మార్గదర్శక ఫలితం' },
  'industry.resultNotice': {
    en: 'DEMO GUIDANCE — Verify against current official BIS information.',
    hi: 'डेमो मार्गदर्शन — वर्तमान आधिकारिक बीआईएस जानकारी से सत्यापित करें।',
    te: 'డెమో మార్గదర్శక — ప్రస్తుత అధికారిక బిఐఎస్ సమాచారంతో ధృవీకరించండి.',
  },
  'industry.product': { en: 'Product', hi: 'उत्पाद', te: 'ఉత్పత్తి' },
  'industry.needLabel': { en: 'Need', hi: 'आवश्यकता', te: 'అవసరం' },
  'industry.guidance1Title': { en: 'Potentially relevant standards', hi: 'संभावित प्रासंगिक मानक', te: 'సంభావ్య సంబంధిత ప్రమాణాలు' },
  'industry.guidance1Item1': { en: 'Standards related to this product in the selected category.', hi: 'चयनित श्रेणी में इस उत्पाद से संबंधित मानक।', te: 'ఎంచుకున్న వర్గంలో ఈ ఉత్పత్తికి సంబంధించిన ప్రమాణాలు.' },
  'industry.guidance1Item2': { en: 'Confirm the exact applicable Indian Standard through official BIS sources.', hi: 'आधिकारिक बीआईएस स्रोतों के माध्यम से सटीक लागू भारतीय मानक की पुष्टि करें।', te: 'అధికారిక బిఐఎస్ మూలాల ద్వారా ఖచ్చిత వర్తించే భారతీయ ప్రమాణాన్ని నిర్ధారించండి.' },
  'industry.guidance1Item3': { en: 'An Indian Standard existing for a product does not automatically mean certification is mandatory.', hi: 'किसी उत्पाद के लिए भारतीय मानक का होना स्वतः यह नहीं कहता कि प्रमाणन अनिवार्य है।', te: 'ఉత్పత్తికి భారతీయ ప్రమాణం ఉండటం అంటే స్వయంచాలకంగా ధృవీకరణ తప్పనిసరి అని కాదు.' },
  'industry.guidance2Title': { en: 'Certification considerations', hi: 'प्रमाणन विचार', te: 'ధృవీకరణ పరిశీలనలు' },
  'industry.guidance2Item1': { en: 'Check whether a BIS conformity assessment scheme applies to your product.', hi: 'जाँचें कि आपके उत्पाद पर कोई बीआईएस अनुरूपता मूल्यांकन योजना लागू होती है।', te: 'మీ ఉత్పత్తికి ఏదైనా బిఐఎస్ అనురూపత మూల్యాంకన పథకం వర్తిస్తుందో తనిఖీ చేయండి.' },
  'industry.guidance2Item2': { en: 'Check whether a Quality Control Order makes certification mandatory.', hi: 'जाँचें कि कोई गुणवत्ता नियंत्रण आदेश प्रमाणन को अनिवार्य बनाता है।', te: 'నాణ్యత నియంత్రణ ఉత్తర్వు ధృవీకరణను తప్పనిసరి చేస్తుందో తనిఖీ చేయండి.' },
  'industry.guidance2Item3': { en: 'Distinguish between voluntary and mandatory certification.', hi: 'स्वैच्छिक और अनिवार्य प्रमाणन के बीच अंतर करें।', te: 'స్వచ్ఛ మరియు తప్పనిసరి ధృవీకరణ మధ్య భేదాన్ని గుర్తించండి.' },
  'industry.guidance3Title': { en: 'Documents to investigate', hi: 'जाँच करने योग्य दस्तावेज़', te: 'తనిఖీ చేయదగిన డాక్యుమెంట్‌లు' },
  'industry.guidance3Item1': { en: 'Product and manufacturer details.', hi: 'उत्पाद और निर्माता विवरण।', te: 'ఉత్పత్తి మరియు తయారీదారు వివరాలు.' },
  'industry.guidance3Item2': { en: 'Test reports from recognised laboratories.', hi: 'मान्यता प्राप्त प्रयोगशालाओं से परीक्षण रिपोर्ट।', te: 'గుర్తింపు పొందిన ప్రయోగశాలల నుండి పరీక్ష నివేదికలు.' },
  'industry.guidance3Item3': { en: 'Quality control records and factory information.', hi: 'गुणवत्ता नियंत्रण रिकॉर्ड और फ़ैक्टरी जानकारी।', te: 'నాణ్యత నియంత్రణ రికార్డులు మరియు కర్మాగార సమాచారం.' },
  'industry.guidance3Item4': { en: 'Application forms and supporting documents.', hi: 'आवेदन फॉर्म और सहायक दस्तावेज़।', te: 'దరఖాస్తు ఫారమ్‌లు మరియు సహాయక డాక్యుమెంట్‌లు.' },
  'industry.guidance4Title': { en: 'Testing / assessment', hi: 'परीक्षण / मूल्यांकन', te: 'పరీక్ష / మూల్యాంకనం' },
  'industry.guidance4Item1': { en: 'Product testing against the applicable Indian Standard.', hi: 'लागू भारतीय मानक के विरुद्ध उत्पाद परीक्षण।', te: 'వర్తించే భారతీయ ప్రమాణానికి వ్యతిరేకంగా ఉత్పత్తి పరీక్ష.' },
  'industry.guidance4Item2': { en: 'Factory inspection and quality system assessment as applicable.', hi: 'लागू होने पर फ़ैक्टरी निरीक्षण और गुणवत्ता प्रणाली मूल्यांकन।', te: 'వర్తించినట్లుగా కర్మాగార తనిఖీ మరియు నాణ్యత వ్యవస్థ మూల్యాంకనం.' },
  'industry.guidance4Item3': { en: 'Testing in BIS-recognised laboratories.', hi: 'बीआईएस-मान्यता प्राप्त प्रयोगशालाओं में परीक्षण।', te: 'బిఐఎస్-గుర్తింపు పొందిన ప్రయోగశాలలలో పరీక్ష.' },
  'industry.guidance5Title': { en: 'Next steps', hi: 'अगले कदम', te: 'తదుపరి దశలు' },
  'industry.guidance5Item1': { en: 'Identify the exact applicable Indian Standard for your product.', hi: 'अपने उत्पाद के लिए सटीक लागू भारतीय मानक की पहचान करें।', te: 'మీ ఉత్పత్తికి ఖచ్చిత వర్తించే భారతీయ ప్రమాణాన్ని గుర్తించండి.' },
  'industry.guidance5Item2': { en: 'Confirm applicable conformity assessment scheme and regulatory requirements.', hi: 'लागू अनुरूपता मूल्यांकन योजना और नियामक आवश्यकताओं की पुष्टि करें।', te: 'వర్తించే అనురూపత మూల్యాంకన పథకం మరియు నియంత్రణ అవసరాలను నిర్ధారించండి.' },
  'industry.guidance5Item3': { en: 'Prepare documentation and apply through official BIS channels.', hi: 'दस्तावेज़ तैयार करें और आधिकारिक बीआईएस चैनलों के माध्यम से आवेदन करें।', te: 'డాక్యుమెంటేషన్ సిద్ధం చేసి అధికారిక బిఐఎస్ మార్గాల ద్వారా దరఖాస్తు చేయండి.' },
  'industry.askAssistantProduct': { en: 'Ask Assistant About This Product', hi: 'इस उत्पाद के बारे में सहायक से पूछें', te: 'ఈ ఉత్పత్తి గురించి అసిస్టెంట్‌ను అడగండి' },
  'industry.demoGuidanceBadge': { en: 'DEMO GUIDANCE', hi: 'डेमो मार्गदर्शन', te: 'డెమో మార్గదర్శక' },

  // ── About page ──
  'about.title': { en: 'About BIS Intelligent Assistant', hi: 'बीआईएस इंटेलिजेंट असिस्टेंट के बारे में', te: 'బిఐఎస్ ఇంటెలిజెంట్ అసిస్టెంట్ గురించి' },
  'about.desc': {
    en: 'This prototype demonstrates an AI-powered interface designed to help consumers and industries understand Indian Standards and BIS services.',
    hi: 'यह प्रोटोटाइप एक एआई-संचालित इंटरफ़ेस प्रदर्शित करता है जिसे उपभोक्ताओं और उद्योगों को भारतीय मानक और बीआईएस सेवाएँ समझने में सहायता के लिए डिज़ाइन किया गया है।',
    te: 'ఈ ప్రోటోటైప్ వినియోగదారులు మరియు పరిశ్రమలు భారతీయ ప్రమాణాలు మరియు బిఐఎస్ సేవలను అర్థం చేసుకోవడంలో సహాయపడటానికి రూపొందించిన ఏఐ-ఆధారిత ఇంటర్‌ఫేస్‌ను ప్రదర్శిస్తుంది.',
  },
  'about.currentArch': { en: 'Current Prototype Architecture', hi: 'वर्तमान प्रोटोटाइप आर्किटेक्चर', te: 'ప్రస్తుత ప్రోటోటైప్ ఆర్కిటెక్చర్' },
  'about.futureArch': { en: 'Future Architecture', hi: 'भविष्य आर्किटेक्चर', te: 'భవిష్యత్ ఆర్కిటెక్చర్' },
  'about.plannedIntegration': { en: 'Planned Integration', hi: 'प्रस्तावित एकीकरण', te: 'ప్రణాళిక ఏకీకరణ' },
  'about.futureDesc': {
    en: 'The production system will connect a Python/FastAPI backend with RAG retrieval and a verified BIS knowledge base.',
    hi: 'उत्पादन प्रणाली एक Python/FastAPI बैकएंड को RAG पुनर्प्राप्ति और एक सत्यापित बीआईएस ज्ञान आधार के साथ जोड़ेगी।',
    te: 'ఉత్పత్తి వ్యవస్థ Python/FastAPI బ్యాకెండ్‌ను RAG పునరుపాదన మరియు ధృవీకరించబడిన బిఐఎస్ జ్ఞాన ఆధారంతో అనుసంధానిస్తుంది.',
  },
  'about.problemStatement': { en: 'Problem Statement', hi: 'समस्या विवरण', te: 'సమస్య వివరణ' },
  'about.problemDesc1': {
    en: 'SIH26107: AI-powered Intelligent Assistant for Indian Standards and BIS Services for Industries and Consumers.',
    hi: 'SIH26107: उद्योगों और उपभोक्ताओं के लिए भारतीय मानक और बीआईएस सेवाओं के लिए एआई-संचालित इंटेलिजेंट असिस्टेंट।',
    te: 'SIH26107: పరిశ్రమలు మరియు వినియోగదారుల కోసం భారతీయ ప్రమాణాలు మరియు బిఐఎస్ సేవల కోసం ఏఐ-ఆధారిత ఇంటెలిజెంట్ అసిస్టెంట్.',
  },
  'about.problemDesc2': {
    en: 'The assistant is designed to serve two audiences — consumers who want to understand BIS marks and standards in simple language, and industries that need guidance on certification, documentation and compliance.',
    hi: 'सहायक दो श्रोताओं की सेवा के लिए डिज़ाइन किया गया है — उपभोक्ताओं जो बीआईएस मार्क और मानकों को सरल भाषा में समझना चाहते हैं, और उद्योगों जिन्हें प्रमाणन, दस्तावेज़ीकरण और अनुपालन पर मार्गदर्शन चाहिए।',
    te: 'అసిస్టెంట్ రెండు ప్రేక్షకులకు సేవ చేయడానికి రూపొందించబడింది — సరళ భాషలో బిఐఎస్ గుర్తులు మరియు ప్రమాణాలను అర్థం చేసుకోవాలనుకునే వినియోగదారులు, మరియు ధృవీకరణ, డాక్యుమెంటేషన్ మరియు అనుగుణతపై మార్గదర్శకం కావలసిన పరిశ్రమలు.',
  },
  'about.disclaimer': {
    en: 'This is a prototype for the Smart India Hackathon 2026. All data shown is demo data and must be verified against official BIS sources.',
    hi: 'यह स्मार्ट इंडिया हैकाथन 2026 के लिए एक प्रोटोटाइप है। दिखाया गया सभी डेटा डेमो डेटा है और इसे आधिकारिक बीआईएस स्रोतों से सत्यापित किया जाना चाहिए।',
    te: 'ఇది స్మార్ట్ ఇండియా హాకథాన్ 2026 కోసం ప్రోటోటైప్. చూపబడిన అన్ని డేటా డెమో డేటా మరియు అధికారిక బిఐఎస్ మూలాల నుండి ధృవీకరించాలి.',
  },
  'about.flowUser': { en: 'User', hi: 'उपयोगकर्ता', te: 'వినియోగదారు' },
  'about.flowWebInterface': { en: 'Web Interface', hi: 'वेब इंटरफ़ेस', te: 'వెబ్ ఇంటర్‌ఫేస్' },
  'about.flowAiAssistant': { en: 'AI Assistant', hi: 'एआई सहायक', te: 'ఏఐ అసిస్టెంట్' },
  'about.flowKnowledgeRetrieval': { en: 'Knowledge Retrieval', hi: 'ज्ञान पुनर्प्राप्ति', te: 'జ్ఞాన పునరుపాదన' },
  'about.flowBisKnowledgeBase': { en: 'BIS Knowledge Base', hi: 'बीआईएस ज्ञान आधार', te: 'బిఐఎస్ జ్ఞాన ఆధారం' },
  'about.flowSourceResponse': { en: 'Source-backed Response', hi: 'स्रोत-समर्थित प्रतिक्रिया', te: 'మూలం-ఆధారిత ప్రతిస్పందన' },
  'about.flowFrontend': { en: 'Frontend', hi: 'फ्रंटएंड', te: 'ఫ్రంటెండ్' },
  'about.flowBackend': { en: 'Python/FastAPI Backend', hi: 'Python/FastAPI बैकएंड', te: 'Python/FastAPI బ్యాకెండ్' },
  'about.flowRag': { en: 'RAG Retrieval', hi: 'RAG पुनर्प्राप्ति', te: 'RAG పునరుపాదన' },
  'about.flowVerifiedBis': { en: 'Verified BIS Knowledge Base', hi: 'सत्यापित बीआईएस ज्ञान आधार', te: 'ధృవీకరించబడిన బిఐఎస్ జ్ఞాన ఆధారం' },
  'about.flowLlm': { en: 'LLM', hi: 'LLM', te: 'LLM' },
  'about.flowAnswerSources': { en: 'Answer + Sources', hi: 'उत्तर + स्रोत', te: 'సమాధానం + మూలాలు' },

  // ── Assistant / Chat ──
  'assistant.title': { en: 'BIS Intelligent Assistant', hi: 'बीआईएस इंटेलिजेंट असिस्टेंट', te: 'బిఐఎస్ ఇంటెలిజెంట్ అసిస్టెంట్' },
  'assistant.status': { en: 'BIS Knowledge Assistant', hi: 'बीआईएस ज्ञान सहायक', te: 'బిఐఎస్ జ్ఞాన అసిస్టెంట్' },
  'assistant.intro': {
    en: "Hello! I'm the BIS Intelligent Assistant.\n\nI can help you understand:\n• Indian Standards\n• BIS certification\n• BIS services\n• Consumer information\n• Industry guidance\n\nAsk your question in your own words.",
    hi: "नमस्ते! मैं बीआईएस इंटेलिजेंट असिस्टेंट हूँ।\n\nमैं आपको समझने में मदद कर सकता हूँ:\n• भारतीय मानक\n• बीआईएस प्रमाणन\n• बीआईएस सेवाएँ\n• उपभोक्ता जानकारी\n• उद्योग मार्गदर्शन\n\nअपने शब्दों में अपना प्रश्न पूछें।",
    te: "నమస్కారం! నేను బిఐఎస్ ఇంటెలిజెంట్ అసిస్టెంట్.\n\nమీకు అర్థం చేసుకోవడంలో సహాయపడగలను:\n• భారతీయ ప్రమాణాలు\n• బిఐఎస్ ధృవీకరణ\n• బిఐఎస్ సేవలు\n• వినియోగదారు సమాచారం\n• పరిశ్రమ మార్గదర్శకం\n\nమీ మాటల్లో మీ ప్రశ్నను అడగండి.",
  },
  'assistant.new': { en: 'New', hi: 'नया', te: 'కొత్త' },
  'assistant.clear': { en: 'Clear', hi: 'साफ़ करें', te: 'శుభ్రం చేయండి' },
  'assistant.suggestedQuestions': { en: 'Suggested questions', hi: 'सुझाए गए प्रश्न', te: 'సూచించబడిన ప్రశ్నలు' },
  'assistant.placeholder': {
    en: 'Ask about BIS standards, certification, services...',
    hi: 'बीआईएस मानक, प्रमाणन, सेवाओं के बारे में पूछें...',
    te: 'బిఐఎస్ ప్రమాణాలు, ధృవీకరణ, సేవల గురించి అడగండి...',
  },
  'assistant.demoResponse': { en: 'DEMO RESPONSE', hi: 'डेमो प्रतिक्रिया', te: 'డెమో ప్రతిస్పందన' },
  'assistant.simpleExplanation': { en: 'Simple explanation', hi: 'सरल व्याख्या', te: 'సరళ వివరణ' },
  'assistant.nextStep': { en: 'Next step', hi: 'अगला कदम', te: 'తదుపరి దశ' },
  'assistant.sources': { en: 'Sources', hi: 'स्रोत', te: 'మూలాలు' },
  'assistant.copy': { en: 'Copy', hi: 'कॉपी', te: 'కాపీ' },
  'assistant.copied': { en: 'Copied', hi: 'कॉपी हुआ', te: 'కాపీ అయింది' },
  'assistant.helpful': { en: 'Helpful', hi: 'उपयोगी', te: 'సహాయకరం' },
  'assistant.notHelpful': { en: 'Not helpful', hi: 'उपयोगी नहीं', te: 'సహాయకరం కాదు' },
  'assistant.searching': { en: 'Searching demo knowledge...', hi: 'डेमो ज्ञान खोजा जा रहा है...', te: 'డెమో జ్ఞానం వెతకబడుతోంది...' },
  'assistant.error': { en: 'Unable to get a response. Please try again.', hi: 'प्रतिक्रिया प्राप्त करने में असमर्थ। कृपया पुनः प्रयास करें।', te: 'ప్రతిస్పందన పొందడంలో విఫలమైంది. దయచేసి మళ్లీ ప్రయత్నించండి.' },
  'assistant.attachDoc': { en: 'Attach document', hi: 'दस्तावेज़ संलग्न करें', te: 'డాక్యుమెంట్ జోడించండి' },
  'assistant.send': { en: 'Send', hi: 'भेजें', te: 'పంపండి' },
  'assistant.prototypeFeature': { en: 'Prototype feature', hi: 'प्रोटोटाइप सुविधा', te: 'ప్రోటోటైప్ ఫీచర్' },
  'assistant.docAnalysisNotice': {
    en: 'Document analysis is available in the planned RAG/document-processing module.',
    hi: 'दस्तावेज़ विश्लेषण योजित RAG/दस्तावेज़-प्रसंस्करण मॉड्यूल में उपलब्ध है।',
    te: 'డాక్యుమెంట్ విశ్లేషణ ప్రణాళిక RAG/డాక్యుమెంట్-ప్రాసెసింగ్ మాడ్యూల్‌లో అందుబాటులో ఉంది.',
  },
  'assistant.demoNotice': {
    en: 'Demo responses — verify with official BIS sources.',
    hi: 'डेमो प्रतिक्रियाएँ — आधिकारिक बीआईएस स्रोतों से सत्यापित करें।',
    te: 'డెమో ప్రతిస్పందనలు — అధికారిక బిఐఎస్ మూలాల నుండి ధృవీకరించండి.',
  },
  'assistant.errorMsg': {
    en: 'Sorry, something went wrong while processing your request. Please try again.',
    hi: 'क्षमा करें, आपके अनुरोध को संसाधित करते समय कुछ गलत हुआ। कृपया पुनः प्रयास करें।',
    te: 'క్షమించండి, మీ అభ్యర్థనను ప్రాసెస్ చేస్తున్నప్పుడు ఏదో తప్పు జరిగింది. దయచేసి మళ్లీ ప్రయత్నించండి.',
  },

  // ── SourceCard ──
  'source.demo': { en: 'Demo', hi: 'डेमो', te: 'డెమో' },
  'source.statusLabel': { en: 'Status:', hi: 'स्थिति:', te: 'స్థితి:' },
  'source.demoStatus': {
    en: 'Demo source / To be connected to verified BIS source',
    hi: 'डेमो स्रोत / सत्यापित बीआईएस स्रोत से जुड़ा जाना है',
    te: 'డెమో మూలం / ధృవీకరించబడిన బిఐఎస్ మూలానికి అనుసంధానించబడాలి',
  },
  'source.verifiedStatus': { en: 'Verified source', hi: 'सत्यापित स्रोत', te: 'ధృవీకరించబడిన మూలం' },
  'source.viewSource': { en: 'View Source', hi: 'स्रोत देखें', te: 'మూలం చూడండి' },
  'source.prototypeMessage': {
    en: 'Official BIS source integration will be connected in the next development phase.',
    hi: 'आधिकारिक बीआईएस स्रोत एकीकरण अगले विकास चरण में जुड़ा जाएगा।',
    te: 'అధికారిక బిఐఎస్ మూలం ఏకీకరణ తదుపరి అభివృద్ధి దశలో అనుసంధానించబడుతుంది.',
  },

  // ── ModeSelector ──
  'mode.consumer': { en: 'Consumer', hi: 'उपभोक्ता', te: 'వినియోగదారు' },
  'mode.industry': { en: 'Industry', hi: 'उद्योग', te: 'పరిశ్రమ' },

  // ── Disclaimer default ──
  'disclaimer.default': {
    en: 'This is demo data. Verify all information against current official BIS sources.',
    hi: 'यह डेमो डेटा है। सभी जानकारी को वर्तमान आधिकारिक BIS स्रोतों से सत्यापित करें।',
    te: 'ఇది డెమో డేటా. అన్ని సమాచారాన్ని ప్రస్తుత అధికారిక BIS మూలాల నుండి ధృవీకరించండి.',
  },
};
