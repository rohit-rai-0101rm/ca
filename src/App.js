import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop/ScrollToTop";
import "bootstrap/dist/css/bootstrap.min.css";

// Home Pages Import

import DigitalAgency from "./pages/DigitalAgency";
import CreativeAgency from "./pages/CreativeAgency";
import PersonalPortfolio from "./pages/PersonalPortfolio";
import HomeStartup from "./pages/HomeStartup";
import CorporateAgency from "./pages/CorporateAgency";

// Blog Import
import BlogGridView from "./pages/BlogGrid";
import BlogCategory from "./pages/Category";
import BlogArchive from "./pages/Archive";
import BlogDetails from "./pages/BlogDetails";

// Service
import ServiceOne from "./pages/ServiceOne";
import ServiceTwo from "./pages/ServiceTwo";
import ServiceDetails from "./pages/ServiceDetails";

// Project
import ProjectGridOne from "./pages/ProjectGridOne";
import ProjectGridTwo from "./pages/ProjectGridTwo";
import ProjectGridThree from "./pages/ProjectGridThree";
import ProjectGridFive from "./pages/ProjectGridFive";
import ProjectGridFour from "./pages/ProjectGridFour";
import ProjectDetails from "./pages/ProjectDetails";

// Pages
import Splash from "./pages/Splash";
import AboutUs from "./pages/AboutUs";
import OurOffice from "./pages/OurOffice";
import OurClients from "./pages/OurClients";
import Team from "./pages/Team";
import TeamDetails from "./pages/TeamDetails";
import CaseStudy from "./pages/CaseStudy";
import CaseDetails from "./pages/CaseStudyDetails";
import Testimonials from "./pages/Testimonials";
import PricingTable from "./pages/PricingTable";
import Typography from "./pages/Typography";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/404";
import ComingSoon from "./pages/ComingSoon";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";

// Css Import
import "./assets/scss/app.scss";
import WhyAbout from "./pages/WhyAbout";
import HowWorks from "./pages/HowWorks";

import Seo from "./pages/Seo";
import Design from "./pages/Design";
import DigitalMarketing from "./pages/DigitalMarketing";

import SeoPage from "./pages/SeoPage";
import WhyIndia from "./pages/WhyIndia";

import HowitWorks from "./pages/HowitWorks";
import DedicatedResource from "./pages/DedicatedResource";
import ManageServiceProvider from "./pages/ManageServiceProvider";
import DedicatedResources from "./pages/DedicatedResources";
import ReactDeveloper from "./pages/ReactDeveloper";
import AngularDevelopers from "./pages/AngularDevelopers";
import NodeDevelopers from "./pages/NodeDevelopers";
import WordPressDeveloper from "./pages/WordPressDeveloper";
import LaravelDevelopers from "./pages/LaravelDevelopers";
import HirePHPDeveloperIntro from "./component/HireDevelopers/HirePHPDeveloperIntro";
import PHPDevelopers from "./pages/PHPDevelopers";
import PluginDevelopers from "./pages/PluginDevelopers";
import WordPressDesigner from "./pages/WordPressDesigner";
import ShopifyDevelopers from "./pages/ShopifyDevelopers";
import GraphicDesigner from "./pages/GraphicDesigner";
import UiuxDesigner from "./pages/UiuxDesigner";
import SeoExperts from "./pages/SeoExperts";
import PpcExperts from "./pages/PpcExperts";
import DotNetDevelopers from "./pages/DotNetDevelopers";
import PythonDevelopoers from "./component/PythonDevelopers/PythonDevelopoers";
import ReactNativeDevelopers from "./pages/ReactNativeDevelopers";
import ProgrammaticSpecialist from "./pages/ProgrammaticSpecialist";
import SalesDeveloper from "./pages/SalesDeveloper";
import SalesAdministrator from "./pages/SalesAdministrator";
import SalesConsultant from "./pages/SalesConsultant";
import JavaDevelopers from "./pages/JavaDevelopers";
import IosDeveloper from "./pages/IosDeveloper";
import AndroidDevelopers from "./pages/AndroidDevelopers";
import RemoteStaffing from "./pages/RemoteStaffing";
import Automobile from "./pages/Automobile";
import EducationElearning from "./pages/EducationElearning";
import RetailEcommerce from "./pages/RetailEcommerce";
import Banking from "./pages/Banking";
import Pharma from "./pages/Pharma";
import Startup from "./pages/Startup";
import RefundPolicy from "./pages/RefundPolicy";
import CancellationPolicy from "./pages/CancellationPolicy";
import ShippingPolicy from "./pages/ShippingPolicy";
import Pricing from "./pages/Pricing";

const App = () => {
  return (
    <Router>
      <ScrollToTop>
        <Routes>
          <Route
            path={process.env.PUBLIC_URL + "/"}
            element={<DigitalAgency />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/how-it-works"}
            element={<HowWorks />}
          />

          <Route
            path={process.env.PUBLIC_URL + "/digital-agency"}
            element={<DigitalAgency />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/creative-agency"}
            element={<CreativeAgency />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/personal-portfolio"}
            element={<PersonalPortfolio />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/home-startup"}
            element={<HomeStartup />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/corporate-agency"}
            element={<CorporateAgency />}
          />

          {/* Blogs */}
          <Route
            path={process.env.PUBLIC_URL + "/blog-grid/"}
            element={<BlogGridView />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/category/:slug"}
            element={<BlogCategory />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/archive/:slug"}
            element={<BlogArchive />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/blog-details/:id"}
            element={<BlogDetails />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/services/seo"}
            element={<SeoPage />}
          />

          {/* Service */}
          <Route
            path={process.env.PUBLIC_URL + "/service-one/"}
            element={<ServiceOne />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/service-two/"}
            element={<ServiceTwo />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/service-details/:slug"}
            element={<ServiceDetails />}
          />

          {/* Project  */}
          <Route
            path={process.env.PUBLIC_URL + "/project-grid-one"}
            element={<ProjectGridOne />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/project-grid-two"}
            element={<ProjectGridTwo />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/project-grid-three"}
            element={<ProjectGridThree />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/project-width-one"}
            element={<ProjectGridFour />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/project-width-two"}
            element={<ProjectGridFive />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/project-details/:slug"}
            element={<ProjectDetails />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/about"}
            element={<WhyAbout />}
          />

          {/* Pages  */}
          <Route
            path={process.env.PUBLIC_URL + "/about-us"}
            element={<AboutUs />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/our-office"}
            element={<OurOffice />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/our-clients"}
            element={<OurClients />}
          />
          <Route path={process.env.PUBLIC_URL + "/team"} element={<Team />} />
          <Route
            path={process.env.PUBLIC_URL + "/team-details/:slug"}
            element={<TeamDetails />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/case-study"}
            element={<CaseStudy />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/case-details/:slug"}
            element={<CaseDetails />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/testimonials"}
            element={<Testimonials />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/pricing-table"}
            element={<PricingTable />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/pricing"}
            element={<Pricing />}
          />

          <Route
            path={process.env.PUBLIC_URL + "/typography"}
            element={<Typography />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/contact"}
            element={<Contact />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/404"}
            element={<ErrorPage />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/coming-soon"}
            element={<ComingSoon />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/privacy-policy"}
            element={<PrivacyPolicy />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/terms-use"}
            element={<TermsOfUse />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/remote-staffing"}
            element={<RemoteStaffing />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/banking-fintech"}
            element={<Banking />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/pharma"}
            element={<Pharma />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/startup"}
            element={<Startup />}
          />

          <Route
            path={process.env.PUBLIC_URL + "/services/seo"}
            element={<Seo />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/services/digital-marketing"}
            element={<DigitalMarketing />}
          />

          <Route
            path={process.env.PUBLIC_URL + "/services/design"}
            element={<Design />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/why-india"}
            element={<WhyIndia />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/dedicated-resources"}
            element={<DedicatedResource />}
          />

          <Route
            path={process.env.PUBLIC_URL + "/managed-service-provider"}
            element={<ManageServiceProvider />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/dedicated-resources"}
            element={<DedicatedResources />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/hire-reactjs-developers"}
            element={<ReactDeveloper />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/hire-angularjs-developers"}
            element={<AngularDevelopers />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/hire-nodejs-developers"}
            element={<NodeDevelopers />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/hire-wordpress-developers"}
            element={<WordPressDeveloper />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/hire-laravel-developers"}
            element={<LaravelDevelopers />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/hire-seo-expert"}
            element={<SeoExperts />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/hire-ppc-expert"}
            element={<PpcExperts />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/automobile"}
            element={<Automobile />}
          />

          <Route
            path={process.env.PUBLIC_URL + "/hire-php-developers"}
            element={<PHPDevelopers />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/hire-wordpress-plugin-developer"}
            element={<PluginDevelopers />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/hire-wordpress-designer"}
            element={<WordPressDesigner />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/hire-shopify-developers"}
            element={<ShopifyDevelopers />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/hire-graphic-designers"}
            element={<GraphicDesigner />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/hire-ui-ux-designers"}
            element={<UiuxDesigner />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/hire-python-developers"}
            element={<PythonDevelopoers />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/hire-salesforce-developer"}
            element={<SalesDeveloper />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/hire-salesforce-administrator"}
            element={<SalesAdministrator />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/hire-salesforce-consultant"}
            element={<SalesConsultant />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/hire-java-developers"}
            element={<JavaDevelopers />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/hire-ios-developers"}
            element={<IosDeveloper />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/hire-android-developers"}
            element={<AndroidDevelopers />}
          />

          <Route
            path={process.env.PUBLIC_URL + "/hire-dot-net-developers"}
            element={<DotNetDevelopers />}
          />

          <Route
            path={process.env.PUBLIC_URL + "/hire-react-native-developers"}
            element={<ReactNativeDevelopers />}
          />

          <Route
            path={process.env.PUBLIC_URL + "/programmatic-advertising"}
            element={<ProgrammaticSpecialist />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/education-elearning"}
            element={<EducationElearning />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/retail-ecommerce"}
            element={<RetailEcommerce />}
          />

          <Route
            path={process.env.PUBLIC_URL + "/refund-policy"}
            element={<RefundPolicy />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/cancellation-policy"}
            element={<CancellationPolicy />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/shipping-policy"}
            element={<ShippingPolicy />}
          />
        </Routes>
      </ScrollToTop>
    </Router>
  );
};

export default App;
