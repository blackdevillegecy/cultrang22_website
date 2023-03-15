import React from "react";
import "./sponsers.css";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from "react-router-dom";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1000, itemsToShow: 4},
    { width: 1200, itemsToShow: 5 },
  ];

export default function Sponsers() {
    return (
        <div className="Sponsers" id="sponsors">
          <div className="Sponsers-heading">sponsors/પ્રાયોજકો</div><br/>
          <div className="Sponsers-slider-headings">PLATINUM SPONSORS</div>
          <Carousel breakPoints={breakPoints} enableSwipe={false}>
            <Link to="https://www.coca-colacompany.com/"><Item link="https://res.cloudinary.com/dwjesc65k/image/upload/v1677401719/cultrang%2723/coke_logo_transparent_jb8wbr.png" height = "130px" text="" backcolor="black"></Item></Link>
          </Carousel>
          <br />
          <div className="Sponsers-slider-headings">SILVER SPONSORS</div>
          <Carousel breakPoints={breakPoints} enableSwipe={false}>
            <Link to="https://www.dkms-bmst.org/"><Item link="https://res.cloudinary.com/dwjesc65k/image/upload/v1677352166/cultrang%2723/DKMS_BMST_-_RGB_White_tagline-01_g0fhdx.png" height="450px" text=""></Item></Link>
            <Link to="http://Imojo.in/ciitg"><Item link="https://res.cloudinary.com/dwjesc65k/image/upload/v1677352959/cultrang%2723/template_primary_wqkyng.png" height="70px" backcolor="white" text=""></Item></Link>
            <Link to="https://www.artandculture.goa.gov.in/"><Item link="https://res.cloudinary.com/dwjesc65k/image/upload/v1677351567/cultrang%2723/minsitry_ty09w7.png" height="250px" text=""></Item></Link>
            <Link to="http://mycanadavisas.com/"><Item link="https://res.cloudinary.com/dwjesc65k/image/upload/v1678280336/cultrang%2723/WhatsApp-Image-2022-08-10-at-4.13.53-PM_el7dvc.jpg" height="120px" text=""></Item></Link>
          </Carousel>
          <br />
          <div className="Sponsers-slider-headings">PARTNERS</div>
          <Carousel breakPoints={breakPoints}>
            <Link to="https://beardo.in/"><Item link="https://res.cloudinary.com/dwjesc65k/image/upload/v1677402369/cultrang%2723/berado_logo_transparent-01_txrgvo.png" text="Grooming Partner" height="150px" mtop="22.5px" mtop2="22.5px"></Item></Link> 
            <Link to="https://www.petaindia.com/"><Item link="https://res.cloudinary.com/dwjesc65k/image/upload/v1677351567/cultrang%2723/peta_lvfmlw.png" text="NGO Partner" height="200px" ></Item></Link>
            <Link to="https://fcgoa.in/"><Item link="https://res.cloudinary.com/dwjesc65k/image/upload/v1677401432/cultrang%2723/team-fcgoa_rvkkgf.png" text="Youth Partner" height="200px" ></Item></Link>
            <Link to="https://xp-pen.co.in/"><Item link="https://res.cloudinary.com/dwjesc65k/image/upload/v1677354970/cultrang%2723/XPPen_DBT_White_nhfz9g.jpg" text="Sketching Partner" height="200px" ></Item></Link>
            <Link to="https://www.growfitter.com/"><Item link="https://res.cloudinary.com/dwjesc65k/image/upload/v1677351566/cultrang%2723/growfitter_exjynw.jpg" text="Fitness Partner" height="200px" ></Item></Link>
            <Link to="https://instax.com/"><Item link="https://res.cloudinary.com/dwjesc65k/image/upload/v1678280335/cultrang%2723/White-Logo_442x_dwozkn.webp" text="Photo Booth Partner" height="150px" mtop="20px" mtop2="16px" ></Item></Link>
            <Link to="http://www.safexpress.com/"><Item link="https://res.cloudinary.com/dwjesc65k/image/upload/v1678280335/cultrang%2723/images_chkjo4.png" text="Official Supply Chain Partner" height="200px" mtop="2px" mtop2="5px" ></Item></Link>
            <Link to="https://www.crossword.in/"><Item link="https://res.cloudinary.com/dwjesc65k/image/upload/v1678281047/cultrang%2723/3d1754474d519_crosswordonlinelogo1.png.999xx_x3cj1x.png" text="Literary Events Partner" height="120px" mtop="20px" mtop2="45px" ></Item></Link>
            <Link to="https://netwebindia.com/"><Item link="https://res.cloudinary.com/dwjesc65k/image/upload/v1678280335/cultrang%2723/netweb-technologies-squarelogo-1633682613609_mbhryw.png" text="Technology  Partner" height="170px" mtop="8px" mtop2="16px" ></Item></Link>
            <Link to="https://revertechitsolution.com/"><Item link="https://res.cloudinary.com/dwjesc65k/image/upload/v1677351566/cultrang%2723/revertech_dhlg3h.jpg" text="EdTech Partner" height="200px" ></Item></Link>
            <Link to="https://www.easemytrip.com/"><Item link="https://res.cloudinary.com/dwjesc65k/image/upload/v1677403144/cultrang%2723/Easemy_trip-02_hbrjxr.png" text="Flying Partner" height="150px" mtop="20px" mtop2="10px"></Item></Link>
            <Link to="https://www.iipacademy.edu.in/"><Item link="https://res.cloudinary.com/dwjesc65k/image/upload/v1677351566/cultrang%2723/iip_qc6myj.png" text="Photography Schooling Partner" height="200px"></Item></Link> 
            <Link to="https://youthincmag.com/"><Item link="https://res.cloudinary.com/dwjesc65k/image/upload/v1677354815/cultrang%2723/youth_msmrj2.webp" text="Youth Media Partner" height="130px" mtop="25px" mtop2="20px" ></Item></Link> 
            <Link to="https://www.covaipost.com/"><Item link="https://res.cloudinary.com/dwjesc65k/image/upload/v1677355773/cultrang%2723/covai_taolzk.png" text="Digital News Partner" height="80px" mtop="27.5px" mtop2="65px" backcolor="white"></Item></Link> 
            <Link to="https://edtimes.in"><Item link="https://res.cloudinary.com/dwjesc65k/image/upload/v1677351566/cultrang%2723/edtimes_j0jaqu.png" text="Blogging Partner" height="200px" ></Item></Link>
            <Link to="https://www.knowafest.com/explore/events"> <Item link="https://res.cloudinary.com/dwjesc65k/image/upload/v1677351567/cultrang%2723/knowafest_wfiay3.png" text="Online Media Partner" height="100px" mtop="40px" mtop2="30px" ></Item></Link>
            <Link to="https://www.hitbullseye.com/"><Item link="https://res.cloudinary.com/dwjesc65k/image/upload/v1677351567/cultrang%2723/hitbullseye_lo6sdf.png" text="Educational Partner" height="80px" backcolor="white" mtop="45px" mtop2="45px"></Item></Link> 
            <Link to="https://www.vskills.in/certification/"><Item link="https://res.cloudinary.com/dwjesc65k/image/upload/v1677351566/cultrang%2723/vskills_lsfzjo.png" text="Skill Partner" height="200px" ></Item></Link>
          </Carousel>
            <div className="Sponsers-social-media">
                <Link to="https://in.linkedin.com/company/cultrang"><div><LinkedInIcon sx={{fontSize: '30px'}} /></div></Link>
                <Link to="https://www.instagram.com/cultrangiitgoa/?hl=en"><div><InstagramIcon sx={{fontSize: '30px'}} /></div></Link>
                <div><YouTubeIcon sx={{fontSize: '30px'}} /></div>
            </div>
        </div>
    );
  }
