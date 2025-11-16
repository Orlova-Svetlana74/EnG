import { Suspense } from 'react'
import styles from './page.module.scss'
import {ProjectsContent} from './projectsContent'
import Image from 'next/image'
import { 
    descriptionSmallShape,   
    // descriptionBigShape,    
    projectsShape,
} from '@/public/img'

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
