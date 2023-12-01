import React from "react";
import "./About.css";
import HeadCard from "../../components/headcard/HeadCard";
import AdminCouncil from "../../components/schoolcouncil/AdminCouncil";
import StudentCouncil from "../../components/schoolcouncil/StudentCouncil";
import AboutFeatures from "../../components/aboutfeatures/AboutFeatures";

function About() {
  return (
    <>
      <HeadCard title="About Our School /" />
      <section id="about">
        <div className="about-text">
          <h3>Our History:</h3>
          <p>
            You can start and finish the one of the following courses Today-for
            free. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Natus alias omnis perferendis, dolorum doloremque minus ad
            consequatur quasi ipsum culpa at vitae dolore earum fuga? Nulla
            aliquid quis nesciunt at!br <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            delectus blanditiis facilis aliquam vel id tempora aliquid debitis,
            sed quisquam? Earum deserunt tempore totam perspiciatis sed officiis
            cumque error sequi! <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
            accusamus ut quas, inventore debitis nisi quo quos, exercitationem,
            necessitatibus officiis amet aspernatur culpa cum facilis reiciendis
            quisquam facere porro possimus nihil quia! Dignissimos
            necessitatibus laborum, obcaecati placeat beatae, voluptatibus,
            assumenda quaerat voluptatem facilis quibusdam eum velit ducimus
            suscipit. Culpa id atque tenetur delectus itaque non facere autem
            veritatis? Magni, ipsa!
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            vero odio minus laborum vel nostrum, modi a voluptatibus natus
            molestiae minima dolor velit, perspiciatis reiciendis ratione. Ullam
            animi sapiente inventore? <br />
            <br />
            You can start and finish the one of the following courses Today-for
            free. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Natus alias omnis perferendis, dolorum doloremque minus ad
            consequatur quasi ipsum culpa at vitae dolore earum fuga? Nulla
            aliquid quis nesciunt at!br <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            delectus blanditiis facilis aliquam vel id tempora aliquid debitis,
            sed quisquam? Earum deserunt tempore totam perspiciatis sed officiis
            cumque error sequi! <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
            accusamus ut quas, inventore debitis nisi quo quos, exercitationem,
            necessitatibus officiis amet aspernatur culpa cum facilis reiciendis
            quisquam facere porro possimus nihil quia! Dignissimos
            necessitatibus laborum, obcaecati placeat beatae, voluptatibus,
            assumenda quaerat voluptatem facilis quibusdam eum velit ducimus
            suscipit. Culpa id atque tenetur delectus itaque non facere autem
            veritatis? Magni, ipsa!
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            vero odio minus laborum vel nostrum, modi a voluptatibus natus
            molestiae minima dolor velit, perspiciatis reiciendis ratione. Ullam
            animi sapiente inventore?
          </p>
        </div>

        <AdminCouncil />
        <StudentCouncil />
        <AboutFeatures />
      </section>
    </>
  );
}

export default About;
