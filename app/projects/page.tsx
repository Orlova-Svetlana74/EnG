import { Suspense } from 'react'
import styles from './page.module.scss'
import {ProjectsContent} from './projectsContent'

const ProjectsPage = () => {
    return (
        <Suspense fallback={
            <div className={styles.wrapper}>
                <div style={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    height: '200px',
                    fontSize: '18px'
                }}>
                    Загрузка...
                </div>
            </div>
        }>
            <ProjectsContent />
        </Suspense>
    )
}

export default ProjectsPage
