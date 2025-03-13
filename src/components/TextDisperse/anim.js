
export const disperse = {
    open: (i) => {
        if (i < 0 || i >= transforms.length) { 
            console.error(`❌ خطأ: الفهرس ${i} خارج النطاق!`, transforms);
            return {}; 
        }

        return {
            x: transforms[i].x + "em",
            y: transforms[i].y + "em",
            rotateZ: transforms[i].rotationZ,
            transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1] },
            zIndex: 1
        };
    },
    closed: {
        x: 0,
        y: 0,
        rotateZ: 0,
        transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1] },
        zIndex: 0
    }
};
