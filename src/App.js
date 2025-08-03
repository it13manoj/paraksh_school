import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Classes from "./components/Classes";
import Teacher from "./components/Teacher";
import Gallery from "./components/Gallery";
import Blog from "./components/Blog";
import Blogdetail from "./components/Blogdetail";
import Contact from "./components/Contact";
import { useLocation, useNavigate } from 'react-router-dom';
import Registation from "./components/Registation";


import { Route, Router, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { API } from "./API";
import axios from "axios";
import Sign_in from "./components/Sign_in";
import Dashboard from "./components/dashboard";
import Profile from "./components/profile";
import StudentClass from "./components/StudentClass";
import Exam from "./components/Exam";
import Result from "./components/Result";
import Schedule from "./components/Schedule";
import TeacherClass from "./components/TeacherClass";
import TeacherExam from "./components/TeacherExam";
import TeacherResult from "./components/TeacherResult";
import Resultsummary from "./components/Resultsummary";
import TeacherSchedule from "./components/TeacherSchedule";
import ScheduleSummary from "./components/ScheduleSummary";
import StdClassList from "./components/StdClassList";
import StudentList from "./components/StudentList";
import StdAttendence from "./components/StdAttendence";
import StdAttendReport from "./components/StdAttendReport";



function App() {
  const [getheader, setHeader] = useState();
  const [dataDetails, setDataDetails] = useState({
    heading: "",
    heading2: "",
    learm_more: "",
    discription: "",
    image: "",
  });

  const location = useLocation();

  const loadHeader = () => {
    axios.get(`${API}home`).then(response => {
      setHeader(response.data.data[0]);
    });
  };

  useEffect(() => {
    loadHeader();
  }, []);

  useEffect(() => {
    if (!getheader && location.pathname !== "/about") return;

    switch (location.pathname.split("/")?.[1]) {
      case "":
      case "home":
        setDataDetails({
          heading: getheader?.heading || "",
          heading2: getheader?.heading2 || "",
          learm_more: getheader?.learm_more || "",
          discription: getheader?.discription || "",
          image: getheader?.images?.[0]?.image || "",
        });
        break;

      case "about":
        setDataDetails({
          heading: "",
          heading2: "About",
          learm_more: "",
          discription: "",
          image: "",
        });
        break;
         case "class":
        setDataDetails({
          heading: "",
          heading2: "Class",
          learm_more: "",
          discription: "",
          image: "",
        });
        break;
        case "teacher":
        setDataDetails({
          heading: "",
          heading2: "Teacher",
          learm_more: "",
          discription: "",
          image: "",
        });
        break;
        case "gallery":
        setDataDetails({
          heading: "",
          heading2: "Gallery",
          learm_more: "",
          discription: "",
          image: "",
        });
        break;
        case "blog":
        setDataDetails({
          heading: "",
          heading2: "Blog",
          learm_more: "",
          discription: "",
          image: "",
        });
        break;
        case "blogdetail":
        setDataDetails({
          heading: "",
          heading2: "Blog detail",
          learm_more: "",
          discription: "",
          image: "",
        });
        break;
        case "contact":
        setDataDetails({
          heading: "",
          heading2: "Contact",
          learm_more: "",
          discription: "",
          image: "",
        });
        break;
        case "registation":
        setDataDetails({
          heading: "",
          heading2: "Registation form",
          learm_more: "",
          discription: "",
          image: "",
        });
        break;
        case "login":
          setDataDetails({
            heading:"",
            heading2:"Sign Up",
            learm_more:"",
            discription:"",
            image:"",
          });
          break;
          case "dashboard":
          setDataDetails({
            heading:"",
            heading2:"Dashboard",
            learm_more:"",
            discription:"",
            image:"",
          });
          break;
          case "profile":
          setDataDetails({
            heading:"",
            heading2:"Personal Profile",
            learm_more:"",
            discription:"",
            image:"",
          });
          break;
          case "student-class":
          setDataDetails({
            heading:"",
            heading2:"Class Details",
            learm_more:"",
            discription:"",
            image:"",
          });
          break;
          case "exam":
          setDataDetails({
            heading:"",
            heading2:"Exam Program",
            learm_more:"",
            discription:"",
            image:"",
          });
          break;
          case "results":
          setDataDetails({
            heading:"",
            heading2:"Result Summery",
            learm_more:"",
            discription:"",
            image:"",
          });
          break;
          case "notification":
          setDataDetails({
            heading:"",
            heading2:"Notification",
            learm_more:"",
            discription:"",
            image:"",
          });
          break;
          case "teacher-class":
            setDataDetails({
              heading:"",
              heading2:"Classes Details",
              learm_more:"",
              discription:"",
              image:"",
            });
            break;
            case "exams":
            setDataDetails({
              heading:"",
              heading2:"Exam Summary",
              learm_more:"",
              discription:"",
              image:"",
            });
            break;
            case "final-results":
            setDataDetails({
              heading:"",
              heading2:"Final Results",
              learm_more:"",
              discription:"",
              image:"",
            });
            break;
            case "result-summary":
            setDataDetails({
              heading:"",
              heading2:"Result Summary",
              learm_more:"",
              discription:"",
              image:"",
            });
            break;
            case "schedule":
            setDataDetails({
              heading:"",
              heading2:"Class Schedule",
              learm_more:"",
              discription:"",
              image:"",
            });
            break;
            case "schedule-summary":
            setDataDetails({
              heading:"",
              heading2:"Schedule Summary",
              learm_more:"",
              discription:"",
              image:"",
            });
            break;
            case "classwise-student":
            setDataDetails({
              heading:"",
              heading2:"ClassWise List",
              learm_more:"",
              discription:"",
              image:"",
            });
            break;
            case "student-list":
            setDataDetails({
              heading:"",
              heading2:"Student List",
              learm_more:"",
              discription:"",
              image:"",
            });
            break;
            case "student-attendence":
            setDataDetails({
              heading:"",
              heading2:"Attendence",
              learm_more:"",
              discription:"",
              image:"",
            });
            break;


      default:
    }
  }, [location.pathname, getheader]);


  console.log(dataDetails);
  return (
    <>
      <NavBar />
      <Header dataDetails={dataDetails} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/class" element={<Classes />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogdetail" element={<Blogdetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/registation" element={<Registation />} />
        <Route path="/login" element={<Sign_in />} />
          <Route path="/dashboard" element={<Dashboard />} />
           <Route path="/profile" element={<Profile />} />
            <Route path="/student-class" element={<StudentClass />} />
            <Route path="/exam" element={<Exam/>} />
            <Route path="/results" element={<Result />} />
            <Route path="/notification" element={<Schedule />} />
            <Route path="/teacher-class" element ={<TeacherClass />} />
             <Route path="/student-profile/:id" element ={<Profile />} />
             <Route path="/studentresult/:id" element={<Result />} />
             <Route path="/exams" element={<TeacherExam />} />
             <Route path="/final-results" element={<TeacherResult />} />
             <Route path="/result-summary/:id" element={<Resultsummary />} />
             <Route path="/schedule" element={<TeacherSchedule/>} />
             <Route path="/schedule-summary" element={<ScheduleSummary/>} />
             <Route path="/classwise-student" element={<StdClassList/>} />
             <Route path="/student-list/:id" element={<StudentList/>} />
             <Route path="/student-attendence" element={<StdAttendence/>} />
             <Route path="/student-attendence/:id" element={<StdAttendReport/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
