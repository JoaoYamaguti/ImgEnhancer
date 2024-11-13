
import Card from '@imgenhancer/app/ui/components/card'

import { gallery } from '@imgenhancer/app/lib/gallery'

import './style.scss'

export default function Page() {
    
    return (
        <div className="gallery">

        {
            gallery.map((card, index) => <Card key={index} card={card}/>)
        }

        </div>
    )
}