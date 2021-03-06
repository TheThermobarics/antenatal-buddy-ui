import React from "react";
import "./SinglePractice.css";

import Navbar from "../components/DashboardComponents/Navbar";

const SinglePractice = ({ match, location }) => {
  console.log(location.state.visitNumber);
  console.log(location.state.patientId);

  return (
    <>
      <Navbar selectedRoute="practices" />
      <main className="relative container mx-auto bg-white px-4">
        <div className="relative -mx-4 top-0 pt-[17%] overflow-hidden"></div>
        <div className="mt-[-10%] w-1/2 mx-auto">
          <div className="relative pt-[56.25%] overflow-hidden rounded-2xl">
            <img
              className="w-full h-full absolute inset-0 object-cover"
              src={location.state.img}
              alt=""
            />
          </div>
        </div>
        <article className="max-w-prose mx-auto py-8">
          <h1 className="text-2xl font-bold">{location.state.heading}</h1>
          <h2 className="mt-2 text-sm text-gray-500">{location.state.date}</h2>
          <p className="mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare
            justo felis, nec lobortis augue luctus et. Sed nibh metus, posuere
            non elit nec, rutrum imperdiet justo. Cras ut nunc felis. Nunc
            rhoncus faucibus ultrices. Suspendisse ut consectetur nulla.
            Pellentesque mattis, ligula at pellentesque tempor, nisl elit porta
            lectus, eu bibendum arcu purus eget urna. Phasellus euismod at elit
            vel convallis. Nullam porttitor mauris risus, eget hendrerit nisl
            tincidunt vel. Phasellus at dolor dui. Aliquam commodo tellus dolor.
            Sed purus nunc, laoreet quis elementum at, elementum at nisl.
            Praesent ut rhoncus orci. Curabitur sit amet est non dolor porttitor
            facilisis. Nullam velit tortor, iaculis eget vehicula quis,
            sollicitudin id magna.
          </p>
          <p className="mt-4">
            Praesent ornare interdum gravida. Donec efficitur leo suscipit
            aliquet pellentesque. In quis purus et dui mollis vulputate. Aenean
            non faucibus felis. Phasellus non aliquet est, non dictum sem. In
            hac habitasse platea dictumst. Integer vehicula elit ac libero
            egestas ornare non sed dolor. Integer vulputate id est nec pulvinar.
            Cras nec sollicitudin lacus, quis sagittis diam. Donec porta libero
            ac lorem semper, eget porttitor quam fermentum. Ut tincidunt feugiat
            sem, nec aliquam mi tincidunt non.
          </p>
          <p className="mt-4">
            Etiam accumsan leo sem, sit amet faucibus ex convallis fermentum.
            Nunc tristique, eros eget rutrum accumsan, dolor quam varius nisl,
            ut euismod arcu urna a lectus. Mauris at dapibus metus. Vestibulum
            ipsum lorem, dictum vitae sapien eget, rutrum rhoncus sapien.
            Vivamus a nisi ut risus porta ultricies. Etiam mollis massa odio,
            non eleifend leo ullamcorper in. Sed ultricies, magna id fermentum
            volutpat, lorem orci placerat mauris, et molestie ipsum mauris sed
            sapien. Aliquam nulla lorem, pretium ut interdum dapibus, suscipit
            at metus. Proin consequat euismod consequat. Aenean placerat turpis
            et pretium condimentum. Nunc hendrerit tellus semper suscipit
            dignissim. Nullam fringilla, sem nec volutpat tincidunt, ex eros
            congue diam, quis venenatis mauris urna et dolor. Vivamus aliquam
            euismod eros vel pulvinar. Cras arcu augue, rutrum nec velit sit
            amet, aliquet lobortis leo. Donec placerat, libero in blandit
            mattis, turpis nisl varius urna, ac pellentesque dui nisi sit amet
            dui.
          </p>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel
            sapien nisi. Sed molestie quis odio ut facilisis. Duis porttitor
            turpis at sollicitudin ornare. Aenean vitae nulla justo. In egestas
            consequat sem, dapibus gravida velit. Nullam dictum, ligula vel
            porttitor vestibulum, est enim lobortis erat, eget rutrum nunc ex at
            mauris. Nunc nec laoreet ipsum. Sed vel est a eros sagittis
            vulputate. Proin cursus ut mauris vel commodo. Sed non sapien metus.
          </p>
          <p className="mt-4">
            Nunc aliquet maximus ante, quis malesuada orci sagittis vel. Nunc
            non porta purus, ultricies rhoncus nulla. Aenean laoreet tortor nec
            risus fringilla posuere. Quisque eu lacinia dolor, in luctus leo.
            Aenean non turpis ac ipsum fermentum faucibus. Pellentesque
            fringilla ante a ex mollis, non scelerisque orci tempor. Sed non
            dapibus dolor, ac euismod turpis. Integer eu quam nibh. Ut suscipit
            lacinia sollicitudin. Pellentesque habitant morbi tristique senectus
            et netus et malesuada fames ac turpis egestas. Maecenas rutrum
            vestibulum mauris, sed mattis tellus maximus in. Nullam imperdiet
            enim nec nisi euismod, ut accumsan odio gravida. Nunc eu augue a dui
            porta fringilla sed at ex. Cras pellentesque suscipit porttitor.
            Nunc non ullamcorper nibh. Praesent purus libero, congue non laoreet
            sed, dapibus vel turpis.
          </p>
        </article>
      </main>
    </>
  );
};

export default SinglePractice;
