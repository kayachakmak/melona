export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  tags: string[];
  patientProfile?: {
    age?: number;
    residence?: string;
    occupation?: string;
    mainConcern?: string;
  };
  mainConcerns: string[];
  presentation: string;
  treatmentGoals: string[];
  treatmentApproach: {
    description: string;
    steps: string[];
  };
  outcome: string[];
  clinicalPerspective: string;
  beforeImage?: string;
  afterImage?: string;
  featured?: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "full-arch-implant-immediate-loading",
    title: "Full-Arch Implant Rehabilitation with Immediate Fixed Temporary Teeth",
    category: "Implant Dentistry",
    tags: ["Implants", "Full-Arch", "Immediate Loading", "International Patient", "Sinus Lift"],
    patientProfile: {
      age: 55,
      residence: "Abroad",
      occupation: "International business",
      mainConcern: "Not being left without teeth during treatment"
    },
    mainConcerns: [
      "15-year-old implant restorations functionally and aesthetically inadequate",
      "Busy international work schedule",
      "Limited time available for treatment",
      "Primary expectation: no toothless period"
    ],
    presentation: "The patient presented to our clinic with implant restorations placed approximately 15 years ago, which had become functionally and aesthetically inadequate over time. Due to his busy international work schedule and residence abroad, the patient's primary expectation was to complete the treatment without experiencing a toothless period and to return home with fixed teeth on the same day. After comprehensive clinical and radiological evaluation, a complete implant revision and full-arch rehabilitation was planned.",
    treatmentGoals: [
      "Complete implant revision and full-arch rehabilitation",
      "Ensure patient never remains without teeth",
      "Provide immediate functional and aesthetic restoration",
      "Enable patient to return home the same day with fixed teeth"
    ],
    treatmentApproach: {
      description: "A comprehensive immediate loading protocol was executed in a single surgical session, combining implant revision with immediate fixed restoration.",
      steps: [
        "Atraumatic removal of the existing 15-year-old implants",
        "Placement of 12 dental implants in the upper and lower jaws",
        "Sinus lifting procedure performed in the same surgical session",
        "Application of 2 cc bone graft supported with a resorbable membrane",
        "Use of Italian-made dental implants with advanced surface technology",
        "Achieving high primary stability, allowing for immediate loading",
        "Digital impressions taken on the day of surgery",
        "Fixed temporary prostheses delivered on the same day"
      ]
    },
    outcome: [
      "Immediate restoration of function and esthetics",
      "Stable implant integration environment",
      "High patient satisfaction",
      "Time-efficient solution for international patients",
      "Comfortable and predictable treatment experience",
      "Patient returned to his home country with functional and aesthetic fixed teeth"
    ],
    clinicalPerspective: "This case demonstrates our clinic's expertise in advanced implant revision cases, bone-deficient situations requiring grafting and sinus lifting, immediate loading protocols, and efficient treatment solutions for international patients. Our goal is to deliver safe, fast and high-quality implant treatments, especially for patients traveling from abroad with limited time.",
    featured: true
  },
  {
    id: "smile-rejuvenation-vertical-dimension",
    title: "Smile Rejuvenation Through Vertical Dimension Restoration",
    category: "Cosmetic Dentistry",
    tags: ["Vertical Dimension", "Tooth Wear", "Anti-Aging", "Smile Design"],
    mainConcerns: [
      "Severe tooth wear over time",
      "Loss of vertical dimension",
      "Tooth discoloration",
      "Reduced tooth length and volume",
      "Aged facial appearance"
    ],
    presentation: "The patient presented with significant tooth wear caused by long-term functional and parafunctional habits, resulting in a loss of vertical dimension. Over time, this led to shortened teeth, flattened smile line, dull and stained tooth surfaces, and an overall aged facial appearance. The patient's primary request was to regain a healthy, youthful and natural-looking smile without an artificial result.",
    treatmentGoals: [
      "Restore the lost vertical dimension",
      "Reestablish proper tooth length and proportions",
      "Improve tooth color and surface texture",
      "Support facial structures for a younger, fresher appearance",
      "Achieve natural, harmonious smile esthetics"
    ],
    treatmentApproach: {
      description: "A comprehensive smile rejuvenation plan was created focusing on both functional rehabilitation and facial esthetics.",
      steps: [
        "Vertical dimension was carefully increased to its ideal functional position",
        "Tooth length and form were redesigned according to facial proportions",
        "Worn and shortened teeth were restored to optimal dimensions",
        "Color and surface characteristics were improved for a brighter, healthier smile",
        "Occlusion and smile dynamics were rebalanced",
        "Entire approach personalized to respect facial features, age, and natural expressions"
      ]
    },
    outcome: [
      "Restored vertical dimension",
      "Fuller, more youthful smile",
      "Improved facial support around the lips and lower face",
      "Natural, harmonious tooth proportions",
      "Significant rejuvenation effect without an artificial appearance",
      "Visibly younger, healthier and more confident look"
    ],
    clinicalPerspective: "Vertical dimension loss is often underestimated but plays a critical role in smile esthetics, facial aging and oral function. This case highlights how a carefully planned vertical dimension restoration can deliver functional stability, esthetic harmony, and facial rejuvenation all within a conservative and patient-centered treatment philosophy.",
    featured: true
  },
  {
    id: "class-3-full-mouth-zirconia",
    title: "Full-Mouth Zirconia Rehabilitation in a Class III Patient",
    category: "Full Mouth Rehabilitation",
    tags: ["Class III", "Zirconia", "Periodontal", "Malocclusion", "28 Crowns"],
    mainConcerns: [
      "Class III skeletal/dental relationship (upper jaw positioned forward)",
      "Malocclusion and improper bite",
      "Old crowns with periodontal complications",
      "Decayed teeth",
      "Functional and aesthetic imbalance"
    ],
    presentation: "The patient presented with a Class III occlusal relationship, accompanied by old crowns, periodontal issues, and multiple decayed teeth. The existing restorations had lost their biological compatibility over time, leading to gum inflammation and periodontal problems, inadequate bite relationship, and poor esthetics and compromised function. The patient's main goal was to restore both oral health and a balanced, natural-looking smile.",
    treatmentGoals: [
      "Eliminate periodontal and restorative problems",
      "Treat existing carious lesions",
      "Correct the occlusal relationship",
      "Reestablish functional bite harmony",
      "Achieve long-term esthetic and biological stability"
    ],
    treatmentApproach: {
      description: "A comprehensive full-mouth rehabilitation plan was designed with special attention to occlusion, jaw relation, and tooth proportions.",
      steps: [
        "Removal of old restorations causing periodontal issues",
        "Periodontal treatment and stabilization of the supporting tissues",
        "Treatment of all decayed teeth",
        "Correction of the bite and occlusal relationship",
        "Restoration of both arches with 28 zirconia crowns",
        "Careful planning to ensure stable, functional and esthetic result despite Class III relationship"
      ]
    },
    outcome: [
      "Corrected occlusion and improved bite function",
      "Healthy and stable periodontal tissues",
      "Balanced smile esthetics",
      "Improved chewing efficiency and comfort",
      "Natural-looking, durable zirconia restorations",
      "Functional, harmonious smile with restored oral health"
    ],
    clinicalPerspective: "Managing Class III patients requires a precise balance between function, biology and esthetics. This case demonstrates how comprehensive planning and full-arch zirconia rehabilitation can successfully correct occlusal problems while maintaining periodontal health and long-term stability."
  },
  {
    id: "open-bite-empress-veneers",
    title: "Open Bite Correction with Empress Laminate Veneers",
    category: "Cosmetic Dentistry",
    tags: ["Open Bite", "Empress Veneers", "Laminate Veneers", "Smile Design"],
    mainConcerns: [
      "Open bite",
      "Tooth decay",
      "Discolored and aged composite fillings",
      "Lack of smile harmony and attractiveness"
    ],
    presentation: "The patient presented with an open bite, accompanied by carious lesions and discolored composite restorations. These issues affected both function and smile esthetics, resulting in an unbalanced and unattractive appearance. The patient's main goal was to achieve a healthy, confident and highly attractive smile while preserving a natural look.",
    treatmentGoals: [
      "Correct the open bite",
      "Treat all decayed teeth",
      "Replace old, stained restorations",
      "Enhance tooth shape, color and proportions",
      "Create a smile that complements facial beauty"
    ],
    treatmentApproach: {
      description: "A minimally invasive, esthetic-driven smile design was planned using Empress laminate veneers.",
      steps: [
        "Open bite was corrected by optimizing occlusal contacts",
        "All decayed teeth were treated",
        "Old, discolored fillings were removed",
        "Empress laminate veneers were placed to restore ideal tooth length, form and brightness",
        "Smile design was customized according to facial features and lip dynamics",
        "Empress ceramics chosen for natural translucency, superior esthetics and lifelike appearance"
      ]
    },
    outcome: [
      "Corrected bite and improved function",
      "Bright, natural and harmonious smile",
      "Elegant tooth proportions",
      "Youthful and attractive appearance",
      "High patient satisfaction",
      "Confident, feminine and beautifully balanced smile"
    ],
    clinicalPerspective: "Open bite cases require precise functional planning combined with high-level esthetics. This case highlights how Empress laminate veneers, when properly planned, can deliver both functional correction and striking smile enhancement."
  },
  {
    id: "minimal-prep-veneers-wear-discoloration",
    title: "Minimal-Preparation Laminate Veneers for Tooth Wear and Discoloration",
    category: "Cosmetic Dentistry",
    tags: ["Minimal Preparation", "Laminate Veneers", "Conservative", "Diastema", "Tooth Wear"],
    mainConcerns: [
      "Gaps between the teeth (diastema)",
      "Tooth wear developed over time",
      "Discoloration and loss of brightness",
      "Desire for a natural yet enhanced smile"
    ],
    presentation: "The patient presented with spacing between the teeth, along with progressive wear and discoloration caused by time and daily functional habits. Despite these changes, the patient wished to preserve as much of her natural tooth structure as possible while achieving a fresh, elegant and natural-looking smile.",
    treatmentGoals: [
      "Close spaces between the teeth",
      "Restore worn tooth surfaces",
      "Improve tooth color and surface texture",
      "Maintain a conservative, tooth-preserving approach",
      "Achieve a naturally enhanced and harmonious smile"
    ],
    treatmentApproach: {
      description: "A personalized smile design was planned using minimal-preparation laminate veneers.",
      steps: [
        "Tooth surfaces were carefully evaluated",
        "Minimal enamel reduction was performed to preserve natural structure",
        "Laminate veneers were designed to restore ideal tooth length and contours",
        "Color and translucency were customized for a natural appearance",
        "Smile harmony was achieved without an artificial look"
      ]
    },
    outcome: [
      "Closed spaces and improved alignment",
      "Brighter, healthier-looking teeth",
      "Natural tooth proportions",
      "Youthful and balanced smile",
      "High patient satisfaction with a minimally invasive result",
      "Natural elegance, softness and harmony"
    ],
    clinicalPerspective: "Minimal-preparation laminate veneers are an ideal solution for patients seeking esthetic improvement with maximum tooth preservation. This case demonstrates how conservative dentistry and artistic smile design can work together to achieve timeless results."
  },
  {
    id: "model-patient-minimal-prep-veneers",
    title: "Minimal-Preparation Laminate Veneers for Aesthetic Smile Refinement",
    category: "Cosmetic Dentistry",
    tags: ["Minimal Preparation", "Model Patient", "Aesthetic Refinement", "Conservative"],
    mainConcerns: [
      "Outdated restorations",
      "Loss of smile brightness",
      "Aged composite fillings",
      "Irregular surface texture",
      "Reduced esthetic quality in close-up views"
    ],
    presentation: "Our model patient presented with aged and visually compromised composite fillings that affected the overall harmony of her smile. Although the tooth structure was largely healthy, the existing restorations caused loss of brightness, irregular surface texture, and reduced esthetic quality in close-up smile views. The patient wished to enhance her smile while preserving as much natural tooth structure as possible.",
    treatmentGoals: [
      "Replace old and worn restorations",
      "Refine tooth shape and surface texture",
      "Improve brightness and translucency",
      "Maintain a minimal-preparation philosophy",
      "Create a camera-ready, natural and elegant smile"
    ],
    treatmentApproach: {
      description: "A conservative smile enhancement plan was designed using minimal-preparation laminate veneers.",
      steps: [
        "Existing composite restorations were carefully removed",
        "Only minimal enamel preparation was performed",
        "Laminate veneers were designed to enhance tooth form and surface quality",
        "Color, translucency and proportions were customized for high esthetic demands",
        "Special attention was given to lip dynamics and close-up photography harmony"
      ]
    },
    outcome: [
      "Smooth, refined tooth surfaces",
      "Brighter and more balanced smile",
      "Natural translucency and elegance",
      "Preserved tooth structure",
      "A confident, camera-ready smile",
      "Soft, feminine and naturally enhanced result"
    ],
    clinicalPerspective: "Minimal-preparation laminate veneers are an excellent solution for patients seeking esthetic refinement rather than dramatic alteration. This case highlights how conservative dentistry combined with artistic smile design can deliver timeless beauty and natural elegance."
  },
  {
    id: "bridge-replacement-individual-crowns",
    title: "Replacement of Old Zirconia Bridges with Individually Designed Crowns",
    category: "Restorative Dentistry",
    tags: ["Zirconia", "Bridge Replacement", "Individual Crowns", "Aesthetic Refinement"],
    mainConcerns: [
      "Old 2-unit and 3-unit zirconia bridges",
      "Bulky appearance and unsatisfactory tooth dimensions",
      "Lack of natural esthetics and definition",
      "Desire for sharper, more refined tooth anatomy"
    ],
    presentation: "The patient presented with previously placed 2-unit and 3-unit zirconia bridges that were functionally acceptable but esthetically unsatisfactory. The main issues reported included excessive bulk and improper tooth proportions, lack of natural contours and separation between teeth, soft undefined anatomy, and an artificial overall appearance. The patient specifically requested a more refined, sharper and individually defined smile.",
    treatmentGoals: [
      "Remove old zirconia bridge restorations",
      "Restore each tooth as a single unit",
      "Improve tooth proportions and dimensions",
      "Create sharp, well-defined anatomy",
      "Achieve a natural yet bold and elegant smile"
    ],
    treatmentApproach: {
      description: "A new smile rehabilitation plan was designed focusing on individual tooth esthetics and precision.",
      steps: [
        "Existing zirconia bridges were carefully removed",
        "Each tooth was planned and restored individually",
        "New zirconia crowns were fabricated with sharp lines and precise anatomy",
        "Tooth dimensions were redesigned to improve smile balance",
        "Occlusion and function were carefully refined",
        "Each tooth gained its own identity through elimination of bridge connections"
      ]
    },
    outcome: [
      "Individually defined teeth with natural separation",
      "Improved tooth proportions and smile symmetry",
      "Sharp, esthetic contours",
      "More natural light reflection",
      "A confident, refined and modern smile appearance",
      "Clean, elegant and highly esthetic result"
    ],
    clinicalPerspective: "Replacing multi-unit zirconia bridges with single-unit restorations allows superior control over anatomy, esthetics and hygiene. This case highlights how precise planning and detailed execution can transform an artificial look into a natural yet striking smile."
  },
  {
    id: "trauma-anterior-zirconia-crown",
    title: "Aesthetic Zirconia Crown for a Traumatized Anterior Tooth",
    category: "Restorative Dentistry",
    tags: ["Trauma", "Anterior Tooth", "Zirconia Crown", "Aesthetic Restoration"],
    mainConcerns: [
      "Fractured anterior tooth caused by trauma",
      "Old, unaesthetic composite restorations",
      "Color mismatch and poor shape",
      "Loss of natural smile harmony"
    ],
    presentation: "The patient presented with a front tooth fractured due to trauma. Over time, the tooth had been restored with multiple composite fillings, which resulted in poor esthetic appearance, inadequate tooth shape, color inconsistency with adjacent teeth, and compromised smile harmony. The patient's main concern was to restore a natural, symmetrical and esthetically pleasing appearance, especially in the smile zone.",
    treatmentGoals: [
      "Eliminate unaesthetic composite restorations",
      "Restore natural tooth form and proportions",
      "Achieve optimal color matching",
      "Provide a long-lasting and highly esthetic solution",
      "Reestablish smile confidence"
    ],
    treatmentApproach: {
      description: "After clinical evaluation, a zirconia crown was selected as the ideal restorative solution.",
      steps: [
        "Old and unaesthetic composite fillings were carefully removed",
        "The tooth was prepared to receive a full-coverage restoration",
        "A high-esthetic zirconia crown was fabricated",
        "Special attention was given to color, translucency and surface texture",
        "The restoration was designed to blend seamlessly with neighboring teeth",
        "Zirconia chosen for strength, biocompatibility and superior esthetic performance"
      ]
    },
    outcome: [
      "Natural tooth shape and proportions restored",
      "Excellent color harmony with adjacent teeth",
      "Smooth, lifelike surface texture",
      "Stable and durable restoration",
      "Renewed smile confidence",
      "No visual difference between restored tooth and surrounding natural dentition"
    ],
    clinicalPerspective: "Trauma-related anterior restorations require both technical precision and artistic vision. This case highlights how modern zirconia restorations can successfully correct previous esthetic failures and restore confidence in the smile."
  },
  {
    id: "all-on-6-maxillary-zirconia-mandibular",
    title: "Combined Treatment with Maxillary All-on-6 and Mandibular Zirconia Crowns",
    category: "Implant Dentistry",
    tags: ["All-on-6", "Periodontitis", "Titanium Bar", "Zirconia", "Tooth Preservation"],
    mainConcerns: [
      "Advanced periodontitis affecting the upper jaw",
      "Poor prognosis of maxillary teeth",
      "Relatively healthy mandibular teeth",
      "Functional and esthetic compromise"
    ],
    presentation: "The patient presented with advanced periodontal disease, predominantly affecting the upper jaw, resulting in severe loss of tooth support and hopeless prognosis for the maxillary teeth. Clinical evaluation showed that the mandibular teeth had a significantly better periodontal condition, making it possible to preserve them. The patient's main expectations were fixed and stable teeth, restoration of chewing function, a natural-looking confident smile, and a long-term reliable solution.",
    treatmentGoals: [
      "Remove hopeless teeth in the upper jaw",
      "Restore full-arch function in the maxilla with a fixed implant solution",
      "Preserve healthy natural teeth in the mandible",
      "Achieve functional balance and esthetic harmony between both arches"
    ],
    treatmentApproach: {
      description: "A combined approach allowed maximum preservation of natural structures while providing a stable and esthetic full-arch solution.",
      steps: [
        "Upper Jaw: Extraction of teeth affected by advanced periodontitis",
        "Upper Jaw: Placement of six implants following the All-on-6 concept",
        "Upper Jaw: Fabrication of a titanium bar–supported framework",
        "Upper Jaw: Placement of a full-arch zirconia prosthesis over the titanium bar",
        "Lower Jaw: Preservation of the patient's natural teeth",
        "Lower Jaw: Periodontal stabilization where necessary",
        "Lower Jaw: Restoration with individual zirconia crowns",
        "Lower Jaw: Adjustment of occlusion for optimal harmony with maxillary prosthesis"
      ]
    },
    outcome: [
      "Complete elimination of periodontal infection in the upper jaw",
      "Strong, fixed and stable maxillary restoration",
      "Preservation of natural teeth in the lower jaw",
      "Balanced occlusion and improved chewing efficiency",
      "Natural and harmonious smile appearance",
      "Significant improvement in comfort and quality of life"
    ],
    clinicalPerspective: "Advanced periodontitis does not always require full-mouth extraction. This case highlights the importance of individualized treatment planning, combining All-on-6 implant rehabilitation where necessary with conservative tooth preservation wherever possible. The result is a predictable, long-lasting and patient-centered solution.",
    featured: true
  },
  {
    id: "no-prep-composite-veneers-shape",
    title: "No-Preparation Composite Laminate Veneers for Anterior Smile Enhancement",
    category: "Cosmetic Dentistry",
    tags: ["No Preparation", "Composite Veneers", "Conservative", "Reversible"],
    mainConcerns: [
      "Dissatisfaction with the shape of the upper front teeth",
      "Desire for a more harmonious smile",
      "Strong preference to avoid tooth reduction or drilling"
    ],
    presentation: "The patient presented with esthetic concerns related to the shape and proportions of the upper anterior teeth. Although the teeth were healthy, the patient felt that the smile lacked balance and refinement. A key requirement expressed by the patient was to improve the smile without any tooth preparation, preserving the natural tooth structure completely.",
    treatmentGoals: [
      "Improve the shape and proportions of the upper front teeth",
      "Enhance smile harmony and symmetry",
      "Preserve 100% of the natural tooth structure",
      "Achieve a natural, soft and youthful appearance"
    ],
    treatmentApproach: {
      description: "A conservative smile enhancement plan was carried out using composite laminate veneers on the upper six anterior teeth.",
      steps: [
        "No tooth reduction or drilling was performed",
        "Composite laminate veneers were applied directly",
        "Tooth shapes and contours were redesigned chairside",
        "Color and translucency were customized for a natural look",
        "Smile design was adapted to facial features and lip dynamics"
      ]
    },
    outcome: [
      "Improved tooth shape and smile balance",
      "Natural and harmonious appearance",
      "Preservation of healthy tooth tissue",
      "Soft, youthful and confident smile",
      "High patient satisfaction with a non-invasive result",
      "Fully reversible and minimally invasive esthetic solution"
    ],
    clinicalPerspective: "Composite laminate veneers are an excellent choice for patients seeking esthetic improvement without tooth preparation. This case highlights how conservative dentistry and artistic layering techniques can deliver beautiful, natural results with maximum tooth preservation."
  },
  {
    id: "composite-veneers-caries-harmonization",
    title: "Composite Laminate Veneers for Anterior Caries and Smile Harmonization",
    category: "Restorative Dentistry",
    tags: ["Composite Veneers", "Caries Treatment", "Conservative", "Anterior Teeth"],
    mainConcerns: [
      "Interproximal caries on the upper central incisors",
      "Irregular tooth shapes",
      "Color mismatch between anterior teeth",
      "Desire for a natural and conservative esthetic solution"
    ],
    presentation: "The patient presented with interproximal caries affecting the two upper front teeth, which compromised both dental health and smile esthetics. In addition, minor shape discrepancies and color inconsistencies were observed in the anterior region. The patient wished to restore the affected teeth while maintaining a natural appearance and avoiding aggressive restorative procedures.",
    treatmentGoals: [
      "Treat interproximal caries conservatively",
      "Restore natural tooth anatomy",
      "Achieve uniform color harmony with adjacent teeth",
      "Enhance overall smile balance",
      "Preserve healthy tooth structure"
    ],
    treatmentApproach: {
      description: "A minimally invasive esthetic plan was carried out using composite laminate veneers on the upper six anterior teeth.",
      steps: [
        "Interproximal caries were carefully removed",
        "Composite laminate veneers were applied conservatively",
        "Tooth shapes were refined and balanced",
        "Color matching was customized to blend seamlessly with natural dentition",
        "Surface texture and translucency were adjusted for a lifelike result"
      ]
    },
    outcome: [
      "Interproximal caries successfully treated",
      "Natural tooth color harmony achieved",
      "Improved tooth shape and symmetry",
      "Soft, esthetic and healthy smile appearance",
      "High patient satisfaction with a minimally invasive result",
      "Natural-looking teeth that integrate seamlessly with existing dentition"
    ],
    clinicalPerspective: "Composite laminate veneers are an excellent option for treating anterior caries while simultaneously enhancing smile esthetics. This case highlights how conservative restorative dentistry can achieve highly esthetic and functional results without unnecessary tooth reduction."
  },
  {
    id: "full-smile-composite-vertical-dimension",
    title: "Full-Smile Composite Laminate Veneers for Vertical Dimension Restoration",
    category: "Full Mouth Rehabilitation",
    tags: ["Composite Veneers", "Vertical Dimension", "20 Teeth", "No Preparation", "Tooth Wear"],
    mainConcerns: [
      "Severe tooth wear over time",
      "Loss of vertical dimension",
      "Crowded and irregular tooth alignment",
      "Desire to avoid tooth cutting or drilling"
    ],
    presentation: "The patient presented with generalized tooth wear, leading to a loss of vertical dimension and an aged facial appearance. In addition, crowding and irregular alignment were evident, affecting both function and smile harmony. Despite these concerns, the patient clearly expressed a strong preference for a non-invasive treatment approach, requesting no tooth preparation or reduction.",
    treatmentGoals: [
      "Restore the lost vertical dimension",
      "Improve tooth alignment visually without orthodontics",
      "Reestablish proper tooth proportions and smile balance",
      "Preserve all natural tooth structure",
      "Achieve a natural, functional and youthful smile"
    ],
    treatmentApproach: {
      description: "A comprehensive, minimally invasive rehabilitation plan was performed using composite laminate veneers on 20 teeth.",
      steps: [
        "No tooth cutting or drilling was performed",
        "Vertical dimension was carefully increased to a functional and esthetic level",
        "Composite laminate veneers were applied to 20 teeth",
        "Tooth shapes and contours were redesigned to camouflage crowding",
        "Occlusion was carefully adjusted to support the new vertical dimension",
        "Color, translucency and surface texture were customized for a natural appearance"
      ]
    },
    outcome: [
      "Restored vertical dimension",
      "Improved smile balance and tooth proportions",
      "Visually aligned teeth without invasive procedures",
      "More youthful facial support",
      "Natural, healthy and harmonious smile",
      "High patient satisfaction with a conservative solution",
      "Functional rejuvenation and esthetic transformation"
    ],
    clinicalPerspective: "Loss of vertical dimension does not always require aggressive prosthetic treatment. This case highlights how full-mouth composite laminate veneers can successfully restore function, esthetics and facial support while maintaining maximum tooth preservation.",
    featured: true
  },
  {
    id: "hollywood-smile-composite-no-prep",
    title: "No-Preparation Composite Laminate Veneers for a Hollywood Smile",
    category: "Cosmetic Dentistry",
    tags: ["Hollywood Smile", "Composite Veneers", "20 Teeth", "No Preparation", "Bright Smile"],
    mainConcerns: [
      "Desire for a Hollywood Smile in both shape and shade",
      "Preference to avoid any tooth reduction or drilling",
      "Brighter, more defined and confident smile appearance"
    ],
    presentation: "The patient presented with the desire to achieve a Hollywood Smile–inspired tooth shape and color, while clearly stating that he did not want any tooth preparation or cutting. A complete clinical evaluation was performed prior to treatment to design a smile fully adapted to the patient's facial features, lip dynamics and personal expectations.",
    treatmentGoals: [
      "Achieve a bright, confident Hollywood Smile look",
      "Enhance tooth shape, symmetry and proportions",
      "Preserve 100% of natural tooth structure",
      "Create a natural yet striking esthetic result",
      "Deliver a minimally invasive and reversible solution"
    ],
    treatmentApproach: {
      description: "A fully additive and conservative smile design was performed using composite laminate veneers on 20 teeth.",
      steps: [
        "No tooth reduction or drilling was performed",
        "Composite laminate veneers were applied to 20 teeth",
        "Tooth shapes were redesigned for a bold yet natural Hollywood Smile appearance",
        "A bright but natural shade was selected to complement the patient's skin tone",
        "Occlusion and smile harmony were carefully adjusted"
      ]
    },
    outcome: [
      "Bright, confident and symmetrical smile",
      "Hollywood Smile–inspired tooth shape and color",
      "Preserved natural tooth structure",
      "Harmonious integration with facial features",
      "High patient satisfaction with a non-invasive treatment",
      "Modern, confident and highly esthetic smile"
    ],
    clinicalPerspective: "Not all smile transformations require aggressive preparation or ceramic restorations. This case demonstrates how full-arch composite laminate veneers can successfully deliver a Hollywood Smile effect while maintaining a minimally invasive philosophy and respecting natural tooth biology."
  },
  {
    id: "minimal-prep-veneers-dynamic-smile",
    title: "Minimal-Preparation Laminate Veneers for Natural and Dynamic Smile Esthetics",
    category: "Cosmetic Dentistry",
    tags: ["Minimal Preparation", "20 Veneers", "Tooth Wear", "Natural Esthetics", "Dynamic Smile"],
    mainConcerns: [
      "Teeth discoloration developed over time",
      "Generalized tooth wear",
      "Loss of vitality and brightness",
      "Desire for a natural yet dynamic esthetic result",
      "Preference for minimal tooth reduction"
    ],
    presentation: "The patient presented with discolored and worn teeth, which affected the overall harmony, brightness and vitality of the smile. Despite these concerns, the patient wished to avoid aggressive treatment and specifically requested a solution that would preserve as much natural tooth structure as possible. The goal was to achieve a smile that looks fresh, natural and dynamic, rather than overly artificial or uniform.",
    treatmentGoals: [
      "Improve tooth color and brightness",
      "Restore worn tooth surfaces",
      "Enhance natural tooth anatomy and proportions",
      "Maintain a minimally invasive approach",
      "Create a lively, balanced and esthetic smile"
    ],
    treatmentApproach: {
      description: "A personalized esthetic treatment plan was carried out using laminate veneers with minimal preparation on 20 teeth.",
      steps: [
        "Only minimal enamel reduction was performed where necessary",
        "Laminate veneers were designed to restore tooth length and surface texture",
        "Natural translucency and light reflection were carefully customized",
        "Tooth shapes were refined to achieve a dynamic and youthful appearance",
        "Occlusion and smile harmony were precisely adjusted"
      ]
    },
    outcome: [
      "Brighter, healthier-looking teeth",
      "Restored tooth anatomy and surface vitality",
      "Natural translucency and depth",
      "Balanced, dynamic smile esthetics",
      "High patient satisfaction with a minimally invasive treatment",
      "Natural, elegant and energetic smile"
    ],
    clinicalPerspective: "Minimal-preparation laminate veneers are an ideal solution for patients seeking natural-looking esthetics with maximum tooth preservation. This case demonstrates how controlled intervention and artistic design can create lively, harmonious smiles that age beautifully over time."
  },
  {
    id: "all-on-6-young-periodontitis",
    title: "Full-Mouth All-on-6 Rehabilitation in a Young Patient with Advanced Periodontitis",
    category: "Implant Dentistry",
    tags: ["All-on-6", "Young Patient", "Advanced Periodontitis", "Titanium Bar", "Full Mouth"],
    mainConcerns: [
      "Teeth appeared relatively healthy in clinical photographs",
      "Radiographic examination revealed advanced periodontitis and severe bone loss",
      "Poor long-term prognosis despite young age"
    ],
    presentation: "The patient, despite being young, presented a striking clinical situation. At first glance, the anterior teeth appeared relatively healthy, which could easily be misleading in a purely visual examination. However, radiographic (X-ray) evaluation revealed advanced-stage periodontitis, severe vertical and horizontal bone loss, and compromised support of all remaining teeth. Due to the extent of periodontal destruction, none of the teeth had a predictable long-term prognosis.",
    treatmentGoals: [
      "Eliminate active periodontal infection",
      "Prevent further bone loss",
      "Restore full oral function",
      "Provide a fixed, stable and long-term solution",
      "Achieve natural-looking esthetics despite extensive treatment"
    ],
    treatmentApproach: {
      description: "A comprehensive full-mouth rehabilitation was planned and performed with titanium bar support for maximum strength and stability.",
      steps: [
        "All teeth were extracted due to advanced periodontal disease",
        "A total of 12 implants were placed",
        "All-on-6 concept was applied for both the upper and lower jaws",
        "Both arches were restored with titanium bar–supported fixed prostheses",
        "Occlusion, phonetics and esthetics were carefully designed",
        "Titanium bar support ensured maximum strength, load distribution, and long-term biomechanical stability"
      ]
    },
    outcome: [
      "Complete elimination of periodontal infection",
      "Stable, fixed full-arch restorations",
      "Excellent chewing efficiency",
      "Balanced bite and improved facial support",
      "Natural and confident smile",
      "Significant improvement in quality of life"
    ],
    clinicalPerspective: "This case highlights an essential clinical message: Healthy-looking teeth do not always mean healthy supporting tissues. Radiographic evaluation plays a critical role in diagnosing silent but aggressive periodontitis, especially in young patients. The All-on-6 concept with titanium bar support, when correctly indicated, provides a predictable and life-changing solution even in complex, advanced cases.",
    featured: true
  },
  {
    id: "immediate-implant-loading-periodontitis",
    title: "Immediate Implant Placement & Loading in Advanced Periodontitis",
    category: "Implant Dentistry",
    tags: ["Immediate Loading", "Immediate Implants", "Periodontitis", "Same Day Teeth", "Zirconia"],
    mainConcerns: [
      "Advanced-stage periodontitis",
      "Severely compromised natural teeth",
      "Poor long-term prognosis",
      "Active infection and extensive periodontal destruction"
    ],
    presentation: "The patient presented with advanced-stage periodontitis, resulting in severely compromised natural teeth with poor long-term prognosis. Due to active infection and extensive periodontal destruction, preserving the existing teeth was not a predictable option.",
    treatmentGoals: [
      "Restore function, esthetics, and comfort as quickly and safely as possible",
      "Avoid toothless period",
      "Eliminate periodontal infection",
      "Provide immediate fixed restoration"
    ],
    treatmentApproach: {
      description: "A full-arch immediate rehabilitation protocol was designed to restore function immediately.",
      steps: [
        "All remaining teeth were extracted due to advanced periodontitis",
        "Implants were placed on the same day as extractions",
        "Immediate loading protocol was applied",
        "Fixed temporary teeth were delivered the next day",
        "After a 3-month healing and osseointegration period, final implant-supported zirconia restorations were completed"
      ]
    },
    outcome: [
      "Elimination of periodontal infection",
      "Stable and fixed teeth from day one",
      "Restoration of chewing function and speech",
      "Healthy soft tissue healing",
      "Natural-looking, strong and durable zirconia restorations",
      "Significant improvement in comfort and quality of life"
    ],
    clinicalPerspective: "Immediate implant placement and loading, when properly planned, is a highly effective solution for patients with advanced periodontitis. This protocol offers rapid functional recovery, high patient satisfaction, and long-term stability when combined with precise surgical and prosthetic planning."
  },
  {
    id: "young-patient-zirconia-rehabilitation",
    title: "Full Rehabilitation with Zirconia Crowns - Young Patient",
    category: "Full Mouth Rehabilitation",
    tags: ["Zirconia", "Young Patient", "Caries Treatment", "Malocclusion", "Full Mouth"],
    mainConcerns: [
      "Multiple dental caries",
      "Malocclusion (incorrect bite relationship)",
      "Affected function and esthetics",
      "Risk for long-term dental health"
    ],
    presentation: "A young patient presented with multiple dental caries and a malocclusion (incorrect bite relationship), which affected both function and esthetics. The existing bite imbalance and untreated cavities posed a risk for long-term dental health.",
    treatmentGoals: [
      "Restore oral health",
      "Correct the bite",
      "Achieve a functional and aesthetic smile",
      "Provide long-lasting, durable restorations"
    ],
    treatmentApproach: {
      description: "A comprehensive treatment approach was planned to restore oral health, correct the bite, and achieve a functional and aesthetic smile.",
      steps: [
        "All carious teeth were properly treated",
        "Occlusion was carefully analyzed and corrected",
        "Functional and esthetic parameters were re-established",
        "Final restorations were completed with high-quality zirconia crowns"
      ]
    },
    outcome: [
      "Corrected bite and improved chewing efficiency",
      "Elimination of decay and infection",
      "Balanced, harmonious tooth proportions",
      "Natural shade and lifelike esthetics",
      "Strong, durable, and long-lasting zirconia restorations",
      "A healthier and more confident smile"
    ],
    clinicalPerspective: "Zirconia crowns provide an ideal solution for young patients requiring both functional rehabilitation and esthetic enhancement, offering excellent strength, biocompatibility, and natural appearance."
  },
  {
    id: "full-mouth-zirconia-28-units",
    title: "Full Smile Rehabilitation with Zirconia Crowns (28 Units)",
    category: "Full Mouth Rehabilitation",
    tags: ["Zirconia", "28 Crowns", "Cervical Caries", "Discoloration", "Full Mouth"],
    mainConcerns: [
      "Severely discolored teeth",
      "Cervical caries (gum-line decay)",
      "Affected esthetics and dental health",
      "Concerns about tooth color, appearance, and durability"
    ],
    presentation: "The patient presented with severely discolored teeth and cervical caries (gum-line decay) affecting both esthetics and dental health. The patient was primarily concerned about tooth color, appearance, and long-term durability of the restorations.",
    treatmentGoals: [
      "Restore function, strength, and a harmonious smile",
      "Eliminate discoloration and decay",
      "Provide durable, natural-looking restorations",
      "Improve overall oral health"
    ],
    treatmentApproach: {
      description: "A full-mouth zirconia crown rehabilitation was planned to address all concerns comprehensively.",
      steps: [
        "Comprehensive oral examination and treatment planning",
        "Management of cervical caries and underlying dental issues",
        "Smile design tailored to facial harmony and patient preferences",
        "Placement of 28 high-quality zirconia crowns"
      ]
    },
    outcome: [
      "Elimination of discoloration and gum-line decay",
      "Uniform, bright, and natural tooth color",
      "Balanced tooth proportions and symmetrical smile",
      "Strong, durable, and biocompatible restorations",
      "Improved oral health and patient satisfaction"
    ],
    clinicalPerspective: "Zirconia crowns offer an excellent solution for full-mouth rehabilitation, combining high strength, natural esthetics, and long-term stability, especially in patients with extensive discoloration and cervical caries."
  }
];