import CardProject from "@/components/CardProject";

const project = {
  title: "excel2docxTemplate2pdf",
  description:
    "Aplicación web que fusiona datos de un archivo XLSX cargado en una plantilla DOCX, permitiendo a los usuarios descargar el resultado en formato DOCX o PDF. Utiliza la API de Gotenberg para la conversión a PDF, alojada en un contenedor Docker.",
  image:
    "https://raw.githubusercontent.com/fernandobouchet/excel2docxTemplate2pdf/main/preview.webp",
  link: "https://excel2docx-template2pdf.vercel.app/",
};

const Project = () => {
  return (
    <div>
      <p className="text-center pb-2">
        Este es uno de los ultimos proyectos en los que he estado trabajando:
      </p>
      <CardProject project={project} />
    </div>
  );
};

export default Project;
