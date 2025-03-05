import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';

// Define the type for each feature
interface Feature {
    name: string;
    description: string;
    icon: React.ElementType;
}

const build: Feature[] = [
    {
        name: 'Seamless Project Management',
        description:
            'Hala Build offers comprehensive tools for tracking project milestones, managing timelines, and organizing tasks, ensuring smooth execution from start to finish.',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'Resource Optimization',
        description: 'With Hala Build, you can efficiently manage resources, including labor, materials, and equipment, reducing costs and maximizing productivity across every phase of the construction process.',
        icon: LockClosedIcon,
    },
    {
        name: 'Real-time Collaboration & Reporting',
        description: 'Stay connected with your team and clients through real-time collaboration features, with automated reporting and analytics that provide insights for better decision-making and project outcomes.',
        icon: ServerIcon,
    },
];
const health: Feature[] = [
    {
        name: 'Comprehensive Patient Management',
        description:
            'Hala Health allows healthcare providers to manage patient data, track medical histories, and schedule appointments effortlessly, ensuring seamless and personalized care.',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'Efficient Workflow Automation',
        description: 'By automating administrative tasks like billing, inventory management, and reporting, Hala Health reduces manual errors, saves time, and helps healthcare professionals focus on patient care.',
        icon: LockClosedIcon,
    },
    {
        name: 'Data-Driven Insights & Compliance',
        description: 'With built-in analytics and reporting tools, Hala Health provides valuable insights into healthcare operations while ensuring that your organization complies with industry regulations and standards.',
        icon: ServerIcon,
    },
];
const learn: Feature[] = [
    {
        name: 'Personalized Learning Paths',
        description:
            'Hala Learn allows educators to create custom learning paths for students based on their unique needs, ensuring a tailored educational experience that enhances engagement and outcomes.',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'Streamlined Course Management',
        description: 'Simplify the process of course creation, grading, and tracking student progress with Hala Learn’s easy-to-use tools, making administrative tasks more efficient and less time-consuming.',
        icon: LockClosedIcon,
    },
    {
        name: 'Collaborative Learning Environment',
        description: 'Foster interaction between students and teachers with integrated communication tools, discussion forums, and real-time feedback, promoting a collaborative approach to learning.',
        icon: ServerIcon,
    },
];

export default function Products() {
    return (
        <>
            <div className="overflow-hidden bg-white py-24 sm:py-32" >
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:pt-4 lg:pr-8">
                            <div className="lg:max-w-lg">
                                <h2 className="text-base/7 font-semibold text-indigo-600">Constructions</h2>
                                <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                                    Hala Build
                                </p>
                                <p className="mt-6 text-lg/8 text-gray-600">
                                    Hala Build is a powerful, user-friendly software solution designed to transform the way construction projects are managed. Tailored for the civil sector, Hala Build integrates innovative features that simplify project planning, resource management, and real-time collaboration, helping you achieve your goals faster and more efficiently.
                                </p>
                                <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                                    {build.map((feature) => (
                                        <div key={feature.name} className="relative pl-9">
                                            <dt className="inline font-semibold text-gray-900">
                                                <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-indigo-600" />
                                                {feature.name}
                                            </dt>{' '}
                                            <dd className="inline">{feature.description}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </div>
                        <img
                            alt="Product screenshot"
                            src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
                            width={2432}
                            height={1442}
                            className="w-[48rem] max-w-none rounded-xl ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                        />
                    </div>
                </div>
            </div>
            <div className="overflow-hidden bg-white py-24 sm:py-32" >
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:pt-4 lg:pr-8">
                            <div className="lg:max-w-lg">
                                <h2 className="text-base/7 font-semibold text-indigo-600">Health</h2>
                                <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                                    Hala Health
                                </p>
                                <p className="mt-6 text-lg/8 text-gray-600">
                                    Hala Health is a robust software solution designed to streamline healthcare management. Tailored for hospitals, clinics, and healthcare providers, it offers advanced features that enhance patient care, optimize resource utilization, and ensure regulatory compliance, ultimately improving both operational efficiency and service delivery.
                                </p>
                                <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                                    {health.map((feature) => (
                                        <div key={feature.name} className="relative pl-9">
                                            <dt className="inline font-semibold text-gray-900">
                                                <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-indigo-600" />
                                                {feature.name}
                                            </dt>{' '}
                                            <dd className="inline">{feature.description}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </div>
                        <img
                            alt="Product screenshot"
                            src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
                            width={2432}
                            height={1442}
                            className="w-[48rem] max-w-none rounded-xl ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                        />
                    </div>
                </div>
            </div>
            <div className="overflow-hidden bg-white py-24 sm:py-32" >
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:pt-4 lg:pr-8">
                            <div className="lg:max-w-lg">
                                <h2 className="text-base/7 font-semibold text-indigo-600">Education</h2>
                                <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                                    Hala Learn
                                </p>
                                <p className="mt-6 text-lg/8 text-gray-600">
                                    Hala Learn is an intuitive software solution designed for the education sector to enhance learning experiences, improve administrative workflows, and foster collaboration among students and educators. With its powerful tools, Hala Learn provides personalized learning paths, simplifies course management, and offers real-time insights to drive academic success.
                                </p>
                                <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                                    {learn.map((feature) => (
                                        <div key={feature.name} className="relative pl-9">
                                            <dt className="inline font-semibold text-gray-900">
                                                <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-indigo-600" />
                                                {feature.name}
                                            </dt>{' '}
                                            <dd className="inline">{feature.description}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </div>
                        <img
                            alt="Product screenshot"
                            src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
                            width={2432}
                            height={1442}
                            className="w-[48rem] max-w-none rounded-xl ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                        />
                    </div>
                </div>
            </div>
        </>

    );
}
