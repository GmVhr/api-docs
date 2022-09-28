import React, { useEffect, useState } from 'react';
import carouselStyles from '@site/src/components/css/Carousel.module.css';

export default function Carousel({itemList, title}) {
    
    var itemWidthVar = 380;
    var slidePaddingVar = 25;
    var navButtonSizeVar = 50;
    const Svg = require('@site/static/img/amoeba.svg').default;
    const [currentIndex, setCurrentIndex] = useState(itemList.length * 2);
    const [hasTransitionClass, setHasTransitionClass] = useState(true);
    const [navDisabled, setNavDisabled] = useState(false);
    const [slidePadding, setSlidePadding] = useState(slidePaddingVar);
    const [itemWidth, setItemWidth] = useState(itemWidthVar);
    const [itemHeight, setItemHeight] = useState(itemWidth * (2 / 3));
    const [carouselWidth, setCarouselWidth] = useState(70);
    const [navButtonSize, setNavButtonSize] = useState(navButtonSizeVar);
    
    var newItemList = itemList.concat(itemList, itemList, itemList);

    var carouselContentStyle = {
        width: `${carouselWidth}vw`
    }
    var carouselSlidesStyle = {
        marginLeft: `-${slidePadding}px`,
        transform: `translateX(-${currentIndex * (itemWidth + (slidePadding * 2))}px)`
    }
    var navButtonsStyle = {
        transform: `translateX(-${(100 - carouselWidth) / 2}vw)`,
        top: `calc(50% - ${navButtonSize / 2}px)`
    }
    var buttonStyle = {
        width: `${navButtonSize}px`,
        height: `${navButtonSize}px`
    }
    
    const scrollCarousel = (newIndex) => {
        setCurrentIndex(newIndex);
    };

    useEffect(() => {
        const resizeCarousel = () => {
            if (window.innerWidth > 996) {
                itemWidthVar = 380;
                slidePaddingVar = 25;
                navButtonSizeVar = 50;
            }
            if (window.innerWidth <= 996 && window.innerWidth > 480) {
                itemWidthVar = 300;
                slidePaddingVar = 25;
                navButtonSizeVar = 50;
            } 
            if (window.innerWidth <= 480) {
                itemWidthVar = carouselWidth * window.innerWidth / 100;
                slidePaddingVar = 15;
                navButtonSizeVar = 40;
            } 
            setItemWidth(itemWidthVar);
            setItemHeight(itemWidthVar * (2 / 3));
            setSlidePadding(slidePaddingVar);
            setNavButtonSize(navButtonSizeVar);
        }

        window.addEventListener('resize', resizeCarousel);

        return () => window.removeEventListener('resize', resizeCarousel);
    }, [])

    useEffect(() => {
        if (currentIndex > itemList.length * 2) {
            setNavDisabled(true);
            setTimeout(() => {
                setHasTransitionClass(false);
                setCurrentIndex(currentIndex - itemList.length);
            }, 250)
            
        }
        if (currentIndex == itemList.length) {
            setNavDisabled(true);
            setTimeout(() => {
                setHasTransitionClass(false);
                setCurrentIndex(currentIndex + itemList.length);
            }, 250)
        }
        if (hasTransitionClass === false) {
            setTimeout(() => {
                setHasTransitionClass(true);
                setNavDisabled(false);
            }, 25)
        }
    }, [currentIndex])

    function CarouselItem({Svg, product, link, linkText}) {
    
        var slideStyle = {
            padding: `0 ${slidePadding}px`
        }
    
        var itemStyle = {
            width: `${itemWidth}px`,
            height: `${itemHeight}px`
        }
        
        return (
            <div className={carouselStyles.slide} style={slideStyle}>
                <div className={carouselStyles.item} style={itemStyle}>
                    <div className={carouselStyles.icon}><Svg/></div>
                    <div className={carouselStyles.product}>{product}</div>
                    <div className={carouselStyles.link}><a href={link}>{linkText}</a></div>
                </div>
            </div>
        )
    }

    return (
        <div className={carouselStyles.carouselContainer}>
            <div className={`${carouselStyles.decoration} ${carouselStyles.top}`}>
                <Svg/>
            </div>
            <div className={carouselStyles.content}>
                <div className={carouselStyles.header}>{title}</div>
                <div className={carouselStyles.carouselContent} style={carouselContentStyle}>
                    <div className={carouselStyles.carousel}>
                        <div className={`${carouselStyles.carouselSlides} ${hasTransitionClass ? carouselStyles.transition :""}`} style={carouselSlidesStyle}>
                            {newItemList.map((props, idx) => (
                                <CarouselItem key={idx} {...props} index={idx}/>
                            ))}
                        </div>
                        <div className={`${carouselStyles.navButtons} ${navDisabled ? carouselStyles.disabled :""}`} style={navButtonsStyle}>
                            <button className={carouselStyles.leftButton} onClick={() => scrollCarousel(currentIndex - 1)} style={buttonStyle}></button>
                            <button className={carouselStyles.rightButton} onClick={() => scrollCarousel(currentIndex + 1)} style={buttonStyle}></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${carouselStyles.decoration} ${carouselStyles.bottom}`}>
                <Svg/>
            </div>
        </div>
    )
}