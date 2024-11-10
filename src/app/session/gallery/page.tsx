import { gallery } from '@imgenhancer/app/lib/gallery'

import './style.scss'
import Card from '@imgenhancer/app/ui/components/card'

export default function Page() {
    
    return (
        <div className="gallery">

        {
            gallery.map((card, index) => <Card key={index} card={{}}/>)
        }

        </div>
    )
}