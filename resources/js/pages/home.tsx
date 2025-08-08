import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/home',
    },
];

export default function Home(){
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title='Home'/>
        </AppLayout>
    );
}
