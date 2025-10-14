import { DashboardHeader } from './DashboardHeader';

export interface DashboardLayoutProps {
    children: React.ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
    return (
        <>
            <DashboardHeader />
            <main>{children}</main>
        </>
    )
}
