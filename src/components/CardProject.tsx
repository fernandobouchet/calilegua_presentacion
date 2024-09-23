import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface Props {
  project: {
    title: string;
    description: string;
    image: string;
    link: string;
  };
}

const CardProject = ({ project }: Props) => {
  return (
    <Card className="max-w-screen-sm">
      <CardHeader className="flex flex-col gap-4">
        <CardTitle className="text-center">{project.title}</CardTitle>
        <CardDescription className="text-justify">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="max-w-sm mx-auto">
          <img
            src={project.image}
            alt="Imagen de proyecto"
            className="w-full h-auto"
          />
        </div>
      </CardContent>
      <CardFooter className="flex">
        <Button className="ml-auto">
          <a href={project.link} target="_blank">
            Demo
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CardProject;
