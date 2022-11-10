1. 'About Us' the flowchart image should be1200*700
2. 'banner-bg-img#' is in the style.css file, line 3461, banner-bg-img1 is in path '/images/page-title-bg.jpg', similarly,  banner-bg-img2 is in path '/images/page-title-bg-2.jpg' 


## ✨ Code-base structure

The project is coded using a simple and intuitive structure presented below:

```bash
< PROJECT ROOT >
   |
   |-- components/
   |     ├── About/
   |          ├── AboutUsContent.js
   │          ├── BioDetailsContent.js
   │          └── DataDrivenApproachContent.js                               # Implements app configuration
   |     ├── Blog/
   │          ├── BlogCard.js
   │          ├── BlogCardThree.js
   │          ├── BlogCardTwo.js
   │          ├── BlogDetailsContent.js
   │          └── BlogSideBar.js 
   |     ├── Common/
   │          ├── BlogPost.js
   │          ├── Customers.js
   │          ├── CustomerStyleTwo.js
   │          ├── Funfacts.js
   │          ├── GetStartedProject.js
   │          ├── PageBanner.js
   │          ├── SolutionsTab.js
   │          ├── Subscribe.js
   │          ├── SubscribeStyleThree.js
   │          ├── Team.js
   |     ├── Contact/
   │          ├── ContactForm.js
   │          └── ContactInfo.js
   |          └── freecontact.js
   |     ├── Footer/
   │          └── FooterContent.js
   |     ├── Header/
   │          ├── HeaderContent.js
   │          └── HeaderTop.js
   |     ├── Home/
   │          ├── BrifEmissionX.js
   |          ├── MainBanner.js
   │          ├── OurServices.js
   |          ├── Projects.js
   |     ├── Layouts/
   │          ├── Footer.js
   |          ├── NavBar.js
    
   │        
   │        
   |-- requirements.txt                     # Development modules - SQLite storage
   |
   |-- .env                                 # Inject Configuration via Environment
   |-- manage.py                            # Start the app - Django default start script
   |
   |-- ************************************************************************
```