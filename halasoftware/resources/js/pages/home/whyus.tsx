import {
    ArrowPathIcon,
    CheckBadgeIcon,
    CloudArrowUpIcon,
    FaceSmileIcon,
    FingerPrintIcon,
    LockClosedIcon
} from '@heroicons/react/24/outline';

// Define the type for each feature
interface Feature {
    name: string;
    description: string;
    icon: React.ElementType;
}

const features: Feature[] = [
    {
        name: 'Tailored to Your Industry Needs',
        description:
            "Our software is designed specifically for the civil, health, and education sectors, providing tailored solutions that address the unique challenges of these industries. Whether you're managing projects, improving healthcare workflows, or enhancing educational experiences, our tools are made to meet your needs.",
        icon: CheckBadgeIcon,
    },
    {
        name: 'User-Friendly and Intuitive Interface',
        description:
            'We prioritize ease of use. With a clean, intuitive interface, users can quickly get started and manage tasks with minimal training. Our software reduces complexity, making it accessible for both tech-savvy professionals and beginners alike.',
        icon: FaceSmileIcon,
    },
    {
        name: 'Robust Security and Data Protection',
        description:
            "Security is at the heart of our software. We use state-of-the-art encryption and data protection measures to ensure your sensitive data is always secure. Whether you're handling patient records, student information, or project data, trust that your data is protected from unauthorized access.",
        icon: FingerPrintIcon,

    },
    {
        name: 'Scalable and Flexible',
        description:
            "Our software grows with your organization. Whether you're a small business or a large enterprise, our solution is scalable and adaptable, allowing you to customize features, add users, and expand your system as your needs evolve.",
        icon: ArrowPathIcon,
    },
];

export default function WhyUs() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base/7 font-semibold text-indigo-600">Why Choose Halasoftware</h2>
                    <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
                        Features that make us stand out.
                    </p>
                    <p className="mt-6 text-lg/8 text-gray-600">
                        Our software is designed to help you achieve your goals. We provide the best features to help you.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-16">
                                <dt className="text-base/7 font-semibold text-gray-900">
                                    <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                                        <feature.icon aria-hidden="true" className="size-6 text-white" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-base/7 text-gray-600">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
}