import Link from "next/link";
import "./page.css";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


export default function Home() {
  const navlinks=[
    {
      id:1,
      name:"Projects",
      route:"/projects"
    },
    {
      id:2,
      name:"Services",
      route:"/services"
    },
    {
      id:3,
      name:"Contact",
      route:"/contact"
    },
    {
      id:4,
      name:"Use",
      route:"/use"
    },
    
  ]
  
  return (
    <>
      <main className="main_body">
        <div className="content_container">
          <header className="header_container font-ui-sans-serif">
            <h1>Raghavendra Jayateerth</h1>
            <p>Frontend Developer</p>
            <p className="paragraph">
              Based in Bangalore,India with 2 years of experience in Next.js,
              Angular, and React, I bring a unique blend of passion and
              proficiency to development and design. Obsessed with performance
              and dedicated to crafting clean, impactful designs, my work is a
              testament to the fusion of skill and creativity.
            </p>
            <div className="bottom_line"></div>
            <div className="social_media_container">
              <FaGithub color="var(--font-primary-color)" size={30} />
              <FaInstagram color="var(--font-primary-color)" size={30} />
              <FaLinkedin color="var(--font-primary-color)" size={30} />
              <FaXTwitter color="var(--font-primary-color)" size={30} />
            </div>
          </header>
          <div className="nav_container font-prata">
            <ul>
              {navlinks.map((link)=>(
                <li key={link.id}>
                  <Link href={link.route} className="nav_link">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
