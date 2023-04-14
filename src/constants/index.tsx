import { ClassType } from "@/shared/types";
import image1 from '@/assets/image1.png';
import image2 from '@/assets/image2.png';
import image3 from '@/assets/image3.png';
import image4 from '@/assets/image4.png';
import image5 from '@/assets/image5.png';
import image6 from '@/assets/image6.png';

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image6,
  },
];

import { BenefitType } from "@/shared/types";
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";

const benefits: Array<BenefitType> = [
	{
		icon: <HomeModernIcon className="h-6 w-6" />,
		title: "State of the Art Facilities",
		description: "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
	},
	{
		icon: <UserGroupIcon className="h-6 w-6" />,
		title: "100's of Diverse Classes",
		description: "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
	},
	{
		icon: <AcademicCapIcon className="h-6 w-6" />,
		title: "Expert and Pro Trainers",
		description: "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
	},
];

export {
  classes,
  benefits,
}