import React from "react";
import TeamMemberDetailView from "../Team/TeamMemberDetailView";

const teamMembers = [
  {
    name: "Nelson Lee, P.Eng.",
    image: "/images/team/Nelson.jpg",
    description:
      "Nelson Lee has been working in climate change and sustainability for 16 years primarily as a third-party GHG verifier. He has conducted risk assessments for 30 years and worked with Tetra Tech for 12 years and specializes in  organizational management related to planning and enhancing adaptive capacity to adapt to climate change. He serves as a subject matter expert and committee member for developing multiple ISO standards, including:",
    isoStandards: [
      "Working Group Expert for ISO 14064 part 1 (GHG Quantification and reporting); Mirror Committee member for ISO 14064 parts 2 and 3 – 2012 to 2018",
      "Mirror Committee member for ISO 14065 / ISO 17029 – 2018-2020",
      "Working Group Expert for ISO 14091 (Climate change adaptation – Risk assessments) – 2017-2020",
      "Mirror Committee member for ISO 14090, ISO 14080, ISO 14092 – 2019-2020",
      "Working Group Expert for ISO 14097 (Climate disclosure and risk assessment for financiers) – 2017-2020",
      "Working Group Expert for ISO 14068 (Carbon Neutrality) 2020",
    ],
  },
  {
    name: "Brian Sloof, P.Eng.",
    image: "/images/team/Brian.jpg",
    description:
      "Brian Sloof has over 40 years of experience in the oil and gas and energy sectors. Since 2004 he has been involved with the quantification, reporting, and/or verification of GHG’s and serialization of carbon credits. Previous experience included reporting for Corporate Social Responsibility (CSR), Dow Jones Sustainability Indices(DJSI), Carbon Disclosure Project (CDP) and Governance Reporting. Brian supported TC Energy’s corporate SAP implementation - Air Emissions Module integration and regulatory compliance for air emissions reporting in both GHG’s and pollutants at the federal, provincial, and state levels. Brian is a Professional Engineer registered with the Association of Professional Engineers and Geoscientists of Alberta. To date, Brian has participated in hundreds of verifications as a verifier, lead verifier, as a per reviewer or as an auditor, in BC, Alberta and Saskatchewan, for such industries as oil and gas production, oil sands, mining, pulp and paper, cement, and power generation, to name a few.",
  },
  {
    name: "Kevin Poirier, P.Eng.",
    image: "/images/team/Kevin.jpg",
    description:
      "Kevin Poirier is a Certified Sustainability Professional (CSR-P) and Professional Engineer licensed in the Province of Ontario. Kevin’s expertise focuses on air quality engineering, GHG emissions quantification/verification, sustainability strategy, and climate change adaptation and mitigation planning. He has supported and led teams in large and complex greenhouse gas emissions assessments, air quality assessments and Environmental Approvals (Federal and Provincial) for clients in the mining, steel, pharmaceutical, chemical, oil/gas, electricity generation, and food/beverage sectors. His atmospheric services work has been for clients across North America, Central America, and in the Middle East. He has developed and led training sessions and workshops on topics such as climate change, sustainability planning, and environmental compliance. Kevin has also been retained to deliver climate change adaptation and mitigation training to planning and engineering departments in wastewater and drinking water for clients in Belize, Waterloo, Oshawa, and at the Mohawks of the Bay of Quinte.",
  },
  {
    name: "Minxing Si, P.Eng., Ph.D.",
    image: "/images/team/Minxing.jpg",
    description:
      "Minxing Si boasts over 15 years of extensive experience in GHG verification/assurance, sustainability reporting, climate change mitigation, risk assessment, and climate adaptation across Canada, the US, Asia, and Europe. Having successfully completed more than 500 GHG verification and/or ESG assurance projects. Minxing is a certified lead verifier under Environment Canada’s Clean Fuel Standard and California’s Low Carbon Fuel Standard. Minxing credited with developing the first approved Predictive Emissions Monitoring System (PEMS) for compliance reporting in Canada, specifically for Cenovus Energy in Alberta. Furthermore, Minxing brought PEMS to EnviroByte, transforming it into a free and open-source tool known as OpenPEMS™. OpenPEMS™ draws inspiration from OpenAI's ethos, aiming to promote accessibility and empowerment. Our vision is to democratize Artificial Intelligence (AI) and Machine Learning (ML) technologies, making them accessible to a wider industrial audience, thereby reducing costs associated with air emissions monitoring.",
  },
  {
    name: "Perry E. Toms",
    image: "/images/team/Perry.jpg",
    description:
      "Mr. Perry Toms brings his decades of experience in commercializing cleantech and renewable project development to a wide number of potential investors, financiers, clients, and partners. Perry has held key managerial and executive positions within the conventional, renewable energy, and advanced biofuels industries, as well as direct experience in waste and water infrastructure industries including: the AIM listed Novera Energy Ltd. (Executive Director, Business Development); former ASX listed ABG Biodiesel (EVP); and HTL biofuel technology developer Licella (President). In 2005 he led the North American operations for an Australian-based bio-diesel technology and project development company that eventually led him to the 2011 creation of Steeper Energy ApS (DK) to exploit Hydrothermal Liquefaction (HTL) for the conversion of lignocellulosic biomass and low-ranked coals to advanced low-carbon transport fuels and fine chemicals. Under his leadership, Steeper Energy formed a joint venture with Silva Green Fuel to construct a EUR 50.6 M (DKK 377M) industrial scale demonstration plant in 2017 and received $5 million in funding from Emissions Reduction Alberta in 2021.",
  },
  {
    name: "John Parr, P. Eng. ( Retired )",
    image: "/images/team/John.jpg",
    description:
      "Mr. John Parr is CFO and Co-Founder of GolfADay Ltd, which is a platform to service a niche market in the North American golf industry. Prior to his own startup, he held various executive roles over his 20-year career at Canadian Natural Resources Limited, including VP, Conventional Facilities & Pipelines, VP, Thermal Projects & Facilities, and VP, Thermal Production. John has had experience with all resource types from conventional oil and gas to unconventional plays to in situ oil sands and oil sands mining. He was involved in all phases of development from initial resource delineation, economic evaluation of plays, engineering, procurement, drilling, completions, facilities construction, start-up and long-term daily operations and maintenance. The latter part of his career focused on successful project execution involving large interdisciplinary teams developing multi-billion-dollar oil sands projects. Throughout his career, he focused on operational excellence and led the development of enterprise-scale applications to manage many facets of the complex data management problems faced by large oil and gas companies.",
  },
];

const BioDetailsContent = () => {
  return (
    <>
      <div className="services-details-area pt-[10rem] pb-100 dark:bg-[#151719]">
        <h1 className=" text-[#191919] dark:text-[#D9E3EA] font-[800] text-3xl md:text-[40px] lg:text-[3.25rem] text-center mb-[48px]">
          Bio Details
        </h1>
        <div className="container divide-y-2 grid lg:grid-cols-1 sm:grid-cols-2 grid-cols-1 gap-5">
          {teamMembers.map((member, index) => (
            <div key={index} className="services-details-overview mb-0 pt-5">
              <TeamMemberDetailView member={member} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BioDetailsContent;
