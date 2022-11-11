1. 'About Us' the flowchart image should be1200*700
2. 'banner-bg-img#' is in the style.css file, line 3461, banner-bg-img1 is in path '/images/page-title-bg.jpg', similarly,  banner-bg-img2 is in path '/images/page-title-bg-2.jpg' 


## ✨ Code-base structure

The project is coded using a simple and intuitive structure presented below:

```bash
PROJECT ROOT
   │
   │-- components/
   │     ├── About/
   │          ├── AboutUsContent.js                                          # Details of the about-us page
   │          ├── BioDetailsContent.js                                       # Details of the bio page         
   │          └── DataDrivenApproachContent.js                               # Details of the data driven approach page
   │     ├── Blog/
   │          ├── BlogCard.js                                                # Blog card component - not used   
   │          ├── BlogCardThree.js                                           # Blog card component - not used
   │          ├── BlogCardTwo.js                                             # Blog card component - not used
   │          ├── BlogDetailsContent.js                                      # Details of the blog page
   │          └── BlogSideBar.js                                             # Blog sidebar component - not used
   │     ├── Common/
   │          ├── BlogPost.js                                                # Blog post component - not used
   │          ├── Customers.js                                               # Customers component - not used 
   │          ├── CustomerStyleTwo.js                                        # Customers component - not used
   │          ├── Funfacts.js                                                # Funfacts component - 500+ GHG project etc.
   │          ├── GetStartedProject.js                                       # Get started component - not used
   │          ├── PageBanner.js                                              # Page banner component - used for each detail page top banner below navbar
   │          ├── SolutionsTab.js
   │          ├── Subscribe.js
   │          ├── SubscribeStyleThree.js
   │     ├── Contact/
   │          ├── ContactForm.js
   │          └── ContactInfo.js
   │          └── freecontact.js
   │     ├── DataScience/
   │          ├── ADAContent.js
   │          └── IoTContent.js
   │          └── PEMContent.js
   │          └── PMAContent.js
   │     ├── EmissionX/
   │          └── EmissionXContent.js
   │     ├── Faq/
   │          ├── FaqContactForm.js
   │          └── FaqContent.js
   │     ├── Home/
   │          ├── BrifEmissionX.js
   │          ├── MainBanner.js
   │          ├── OurServices.js
   │          ├── Projects.js
   │     ├── Layouts/
   │          ├── Footer.js
   │          ├── NavBar.js
   │     ├── Pricing/
   │          ├── PricingContent.js
   │     ├── PrivacyPolicy/
   │          ├── PrivacyPolicyContent.js
   │     ├── Projects/
   │          ├── ProjectDetailsContent.js
   │          └── ProjectContent.js
   │     ├── Services/
   │          ├── FeatredService.js
   │          └── ServiceDetailsContent.js
   │          └── ServicesContent.js
   │     ├── Shared/
   │          ├── GoTop.js
   │          └── Loader.js
   │     ├── Team/
   │          ├── TeamMemberContent.js
   │     ├── TermsCondition/
   │          ├── TermsConditionContent.js
   │ -- pages/
   │        ├── 404.js
   │        ├── _app.js
   │        ├── _document.js
   │        ├── about-us.js
   │        ├── api/
   │              └── contact.js
   │        ├── bio-details.js
   │        ├── blog-details.js
   │        ├── blog.js
   │        ├── blog2.js
   │        ├── blog3.js
   │        ├── coming-soon.js
   │        ├── contact.js
   │        ├── data-driven-approach.js
   │        ├── data-science/
   │              ├── IoT-Air-Quality-Monitoring.js
   │              ├── advanced-data-analytics.js
   │              ├── predictive-analytics.js
   │              └── predictive-emissions-monitoring.js
   │         ├── emissionx/
   │              ├── climate-change-adaption.js
   │              ├── decarbonization-pathway.js
   │              ├── life-cycle-assessment.js
   │              ├── materiality-assessment.js
   │              └── tcfd-scenario-analysis.js
   │         ├── emissionx.js
   │         ├── faq.js
   │         ├── index.js
   │         ├── partner.js
   │         ├── pricing.js
   │         ├── privacy-policy.js
   │         ├── project-details.js
   │         ├── projects.js
   │         ├── service-details.js
   │         ├── services.js
   │         ├── team.js
   │         └── terms-condition.js         
   │ 
   │ 
   │        
   │        
   │-- requirements.txt                                         # Development modules and dependencies
   │
   │
   │
```