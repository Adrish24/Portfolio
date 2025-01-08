import { useEffect, useState } from "react";
import {
  navBar,
  title,
  menu,
  menuBtn,
  menuList,
  menuOptions,
  option,
  lisTxt,
} from "./styles/header";

import skills from "./model/skills";
import projectData from "./model/protjectData";
import { contacts, links } from "./model/contacts";

import { MdMenu } from "react-icons/md";

const App = () => {
  const [show, setShow] = useState(false);
  const [showMenuBtn, setShowMenuBtn] = useState(false);

  const handleShow = () => {
    setShow((prev) => !prev);
  };

  useEffect(() => {
    // Function to log window's inner width
    const logWidth = () => {
      // console.log("Window width:", window.innerWidth);
      if (window.innerWidth < 800) {
        setShowMenuBtn(true);
      } else {
        setShowMenuBtn(false);
      }
    };

    // Add event listener on component mount
    window.addEventListener("resize", logWidth);

    // Initial log on component mount
    logWidth();

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", logWidth);
    };
  }, []);

  return (
    <div>
      {/* HEADER */}
      <header className={navBar}>
        <div className={title}>
          <span>Adrish Ghosh</span>
        </div>
        <div className={menu}>
          {showMenuBtn ? (
            <span className={menuBtn} onClick={handleShow}>
              <MdMenu size={24} />
            </span>
          ) : (
            <div className={menuOptions}>
              <div className={option}>
                <a href="#About">About</a>
              </div>
              <div className={option}>
                <a href="#Projects">Projects</a>
              </div>
              <div className={option}>
                <a href="#Footer">Contacts</a>
              </div>
            </div>
          )}
          {showMenuBtn && show && (
            <div className={`${menuList}`}>
              <a className={lisTxt} href="#About">
                About
              </a>
              <a className={lisTxt} href="#Projects">
                Projects
              </a>
              <a className={lisTxt} href="#Footer">
                Contacts
              </a>
            </div>
          )}
        </div>
      </header>

      {/* ABOUT */}
      <section id="About" className="min-h-screen flex py-16">
        <div className="bg-white rounded-lg m-auto max-w-screen-lg grid grid-cols-11 auto-rows-[60px] gap-[10px]">
          <div className="col-span-7 row-span-4 row-start-1 p-4 flex flex-col justify-center">
            <span className=" text-[40px] font-semibold">Hello!</span>
            <p className=" text-wrap pb-3">
              Passionate and skilled in web development technologies, seeking
              opportunity to gain experience in mainstream web-development
              projects.I aim to contribute inovative solutions, fresh ideas and
              effective collaborative-teamwork while enhancing my skills. Open
              to both internship and job oprtunities, I am egar to grow
              proffesionally and make meaningful contribution within an
              organization.
            </p>
            <a
              className="py-3 px-5 mr-auto rounded-lg no-underline colro-black bg-teal-500 "
              href="https://drive.google.com/file/d/1TU7gg5npfatYVBT2KKVF5-5_jkXRpgBh/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </div>
          <div className="col-start-8 col-end-12 row-start-1 row-end-6 p-4 flex justify-center items-center">
            <div
              className="relative  w-[240px] h-[240px] rounded-full flex justify-center items-center
            "
            >
              <span
                className="absolute inset-0  rounded-full animate-wiggle bg-gradient-to-r from-yellow-400 to-red-600
              "
              ></span>
              <img
                className="w-[230px] h-[230px] rounded-full object-cover z-10"
                src="https://res.cloudinary.com/dwrgejdob/image/upload/v1714890394/lnnzma2kwc72rqknrzbs.jpg"
              />
            </div>
          </div>
          <div></div>
          <div className="col-span-7 row-start-5 flex flex-col px-4">
            <span className="font-semibold mb-1">Frontend: </span>
            <div className="flex ">
              {skills?.frontend.map((skill, i) => (
                <img
                  className="p-2 w-12 border-2 border-black border-opacity-5 rounded-xl mr-2 shadow-2xl"
                  src={skill}
                  key={i}
                />
              ))}
            </div>
          </div>
          <div className="col-span-7 row-start-6 flex flex-col px-4 ">
            <span className="font-semibold mb-1 mt-2">Backend: </span>
            <div className="flex ">
              {skills?.backend.map((skill, i) => (
                <img
                  className="p-2 w-12 border-2 border-black border-opacity-5 rounded-xl mr-2 shadow-2xl"
                  src={skill}
                  key={i}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="Projects"
        className="h-auto bg-teal-400 py-20 flex flex-col text-center text-black border-t-8 border-solid border-white"
      >
        <h1 className="text-[32px] mb-4 font-semibold">Projects</h1>
        <div className="m-auto flex flex-col gap-4">
          {projectData?.map((project) => {
            const [mainDes, libraries] = project.description.split("\r\n\r\n");
            const descriptionPoints = mainDes.split("\r\n");
            // console.log(mainDes,libraries)
            return (
              <div
                key={project.title}
                className="flex px-3 bg-white bg-opacity-80 rounded-md"
              >
                <img
                  src={project.thumbnail}
                  alt=""
                  className="w-80 h-48 object-cover rounded-t-[10px] aspect-auto my-2 mr-2 rounded-xl border-2 border-black"
                />
                <div className="grow flex flex-col justify-center px-4 py-3 text-start text-ellipsis">
                  <span className="mb-1 text-lg font-bold">
                    {project.title}
                  </span>
                  <div className="text-[12px] mb-2">
                    {descriptionPoints?.map((point, i) => (
                      <p key={i}>{point}</p>
                    ))}
                  </div>
                  <p className="text-sm font-semibold mb-1">Libraries</p>
                  {project.fullstack && (
                    <span className="text-xs">Frontend - {project.frontend}</span>
                  )}
                  {project.fullstack && <span className="text-xs">Backend - {project.backend}</span>}
                  <ul className="text-[12px]">
                    {libraries?.split(", ").map((lib, i) => (
                      <li key={i}>{lib}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col justify-center items-center gap-6">
                  <a
                    className="bg-teal-300 py-2 px-8 rounded-xl"
                    target="_blank"
                    rel="noreferrer"
                    href={project.link}
                  >
                    Demo
                  </a>
                  <a
                    className="bg-teal-300 py-2 px-8 rounded-xl"
                    target="_blank"
                    rel="noreferrer"
                    href={project.source}
                  >
                    Source
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CONTACTS */}
      <footer id="Footer">
        <div className="flex justify-around  pt-3 pb-10">
          <div className="flex flex-col p-2">
            <h1 className="font-semibold mb-2">Contacts</h1>
            {contacts.map((contact) => (
              <div
                className="mb-2 flex flex-col justify-center items-start"
                key={contact.name}
              >
                <img className="w-5 mb-1" src={contact.logo} />
                <span className="text-[12px]">{contact.link}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col p-2">
            <h1 className="font-semibold mb-2">Links</h1>
            <div className="grow flex gap-4">
              {links.map((link) => (
                <a
                  href={link.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col justify-start items-center py-2"
                  key={link.name}
                >
                  <img className="w-5 mb-1" src={link.logo} />
                  <span className="text-[12px] capitalize">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
