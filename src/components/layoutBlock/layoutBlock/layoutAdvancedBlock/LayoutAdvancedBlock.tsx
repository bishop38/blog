import HeaderContainer from "@/components/header/HeaderContainer";
import styles from './LayoutAdvancedBlock.module.scss'
import TagsMenu from "@/components/tags/TagsMenu/TagsMenu";

export default async function LayoutAdvancedBlock({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={styles['container']}>
            <HeaderContainer />
            <TagsMenu />
            {children}
        </div>
    );
}