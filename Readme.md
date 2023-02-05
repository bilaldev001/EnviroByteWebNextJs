1. 'About Us' the flowchart image should be1200*700
2. 'banner-bg-img#' is in the style.css file, line 3461, banner-bg-img1 is in path '/images/page-title-bg.jpg', similarly,  banner-bg-img2 is in path '/images/page-title-bg-2.jpg' 
3. Mainbanner the blue color is : four blue colors in style.scss line 1201, progressive transition 

npm install
npm run dev
## ✨ Code-base structure

The project is coded using a simple and intuitive structure presented below:

```bash
PROJECT ROOT
   │
   │-- components/
   │     ├── About/
   │          ├── AboutUsContent.js                      # Details of the about-us page
   │          ├── BioDetailsContent.js                   # Details of the bio page         
   │          └── DataDrivenApproachContent.js           # Details of the data driven approach page
   │                   
   │     ├── Common/
   │          ├── Funfacts.js                            # Funfacts component - 500+ GHG project etc.
   │          ├── GetStartedProject.js                   # Get started component 
   │          ├── PageBanner.js                          # Page banner component - used for each detail page top banner below navbar
   │          ├── SolutionsTab.js                        # Solutions tab component - used in home page
   │     ├── Contact/
   │          └── freecontact.js                         # New contact form component - used in contact page 
   │     ├── DataScience/
   │          ├── ADAContent.js                          # Details of the Advanced Data Analytics page
   │          └── IoTContent.js                          # Details of the IoT Air Quality Monitoring page
   │          └── PEMContent.js                          # Details of the Predictive Emissions Monitoring page
   │          └── PMAContent.js                          # Details of the Predictive Analytics page
   │     ├── EmissionX/
   │          ├── ClimateChangeContent.js                # Details of the Climate Change page
   │          └── EmissionXContent.js                    # Details of the EmissionX page - click read more in Home page
   │          └── LCAContent.js                          # Details of the Life Cycle Assessment page
   │     ├── Home/
   │          ├── BrifEmissionX.js                       # Brief EmissionX component - used in home page
   │          ├── MainBanner.js                          # Main banner component - used in home page
   │          ├── OurServices.js                         # Our services (EmissionX) component - used in home page
   │          ├── Projects.js                            # Projects component - not used
   │     ├── Layouts/
   │          ├── Footer.js                              # Footer component - used in all pages
   │          ├── NavBar.js                              # Navbar component - used in all pages
   │     ├── Shared/
   │          ├── GoTop.js                               # Go top component - used in all pages
   │          └── Loader.js                              # Loader component - used in all pages
   │     ├── Team/
   │          ├── TeamMemberContent.js                   # Details of the Team page
   │ -- pages/
   │        ├── 404.js                                   # 404 page
   │        ├── _app.js                                  # app file
   │        ├── _document.js                             # modify favicon h
   │        ├── about-us.js                              # about us page
   │        ├── bio-details.js                           # bio page and call components/About/BioDetailsContent.js
   │        ├── contact.js                               # contact page and call components/Contact/freecontact.js
   │        ├── data-driven-approach.js                  # data driven approach page in About and call components/About/DataDrivenApproachContent.js
   │        ├── data-science/
   │              ├── IoT-Air-Quality-Monitoring.js      # IoT Air Quality Monitoring page in Data Science and call components/DataScience/IoTContent.js
   │              ├── advanced-data-analytics.js         # Advanced Data Analytics page in Data Science and call components/DataScience/ADAContent.js
   │              ├── predictive-analytics.js            # Predictive Analytics page in Data Science and call components/DataScience/PMAContent.js
   │              └── predictive-emissions-monitoring.js # Predictive Emissions Monitoring page in Data Science and call components/DataScience/PEMContent.js
   │         ├── emissionx/
   │              ├── climate-change.js                  # Climate Change page in EmissionX and call components/EmissionX/ClimateChange.js
   │            
   │         ├── emissionx.js                            # EmissionX page and call components/EmissionX/EmissionXContent.js
   │         ├── index.js                                # Home page 
   │         ├── team.js                                 # Team page and call components/Team/TeamMemberContent.js
   │ 
   │ 
   │        
   │        
   │-- requirements.txt                                  # Development modules and dependencies
   │
   │
   │
```