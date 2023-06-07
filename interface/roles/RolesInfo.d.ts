export interface RolesInfoProps {
    name: string;
    path: string;
    logo: {
        src: string;
        alt: string;
    };
    aboutUs: {
        header: string;
        desc: string;
    };
    onboarding: {
        header: string;
        desc: string;
    };
    requirements: {
        header: string;
        desc: string;
    };
}