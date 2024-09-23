const Hero = () => {
  return (
    <div className="max-w-lg p-4 text-center">
      <div className="max-w-44 lg:max-w-56 mx-auto py-4">
        <img
          className="w-full h-auto rounded-full"
          src="https://fernandobouchet.github.io/profile.webp"
          alt="Descripción"
        />
      </div>
      <p>
        Hola me llamo Fernando, soy{" "}
        <span className="text-primary">
          Técnico Universitario en Programación y estudiante intermedio de la
          Licenciatura en Informática{" "}
        </span>
        . Combino mi formación académica con un fuerte compromiso con el
        aprendizaje autodidacta, perfeccionando continuamente mis habilidades a
        través de proyectos individuales y colaborativos.
      </p>
      <p>
        Algunos de las tecnologías que utilizo son:{" "}
        <span className="text-primary">
          React, NextJs, Express, Typescript, Postgresql, MongoDB
        </span>
        .
      </p>
      <p>
        Actualmente también me encuentro aprendiendo{" "}
        <span className="text-primary">C# y .Net</span> para expandir mis
        habilidades en el backend mientras continuo fortaleciendo mis
        habilidades en el desarrollo frontend con{" "}
        <span className="text-primary">React y NextJS</span>.
      </p>
    </div>
  );
};

export default Hero;
