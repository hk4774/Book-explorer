import React, {Component} from 'react';

class Gallery extends Component {
    render() {

        let alternativeImage = 'https://cdn4.iconfinder.com/data/icons/miu/24/circle-no-forbidden-outline-stroke-128.png';

        return (
            <div>{
                this.props.items.map((item, index) => {
                    let {title, imageLinks, infoLink} = item.volumeInfo;
                    return (
                        <a
                            key={index}
                            className="book"
                            href={`${infoLink}`}
                            target="_blank">
                            <img
                                src={imageLinks !== undefined ? imageLinks.thumbnail : alternativeImage}
                                alt="Book Image"
                                className="book-img"

                            />
                            <div className="book-text">
                                {title}
                            </div>
                        </a>
                    )
                })
            }</div>
        )
    }
}

export default Gallery;