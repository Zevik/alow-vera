document.addEventListener('DOMContentLoaded', () => {
    initializeAloeAnimation();
});

function initializeAloeAnimation() {
    const container = document.getElementById('word-cloud-container');

    if (!container) {
        console.error("שגיאה: הקונטיינר חסר.");
        setTimeout(initializeAloeAnimation, 500); // Retry after a delay
        return;
    }

    const words = [
        'בריאות', 'שלווה', 'רוגע', 'איזון', 'אנרגיה', 'חיוניות', 'טבע',
        'נשימה', 'מדיטציה', 'תזונה', 'כושר', 'אורח חיים בריא', 'אלוורה',
        'ריפוי', 'צמיחה', 'מודעות', 'התחדשות', 'רגיעה', 'הרמוניה', 'גוף',
        'נפש', 'יוגה', 'מים', 'שמש', 'אוויר', 'ירוק', 'מרפא', 'טבעי'
    ];

    const numWords = 350;
    const wordElements = [];
    let targetPoints = [];

    // מערך הנקודות לצורת האלוורה
    const aloeShapePoints = [
        // Base Cluster (around 50, 90)
        { x: 49.8, y: 90.5 }, { x: 52.1, y: 88.2 }, { x: 47.5, y: 91.8 }, { x: 50.5, y: 86.9 }, { x: 46.2, y: 89.1 },
        { x: 53.8, y: 90.1 }, { x: 48.9, y: 92.5 }, { x: 51.2, y: 87.5 }, { x: 50.1, y: 90.8 }, { x: 47.0, y: 88.0 },
        { x: 54.5, y: 91.5 }, { x: 49.2, y: 86.5 }, { x: 52.8, y: 89.8 }, { x: 46.0, y: 92.0 }, { x: 51.9, y: 90.3 },
        { x: 48.1, y: 88.8 }, { x: 50.8, y: 89.5 }, { x: 49.5, y: 91.1 }, { x: 52.5, y: 87.1 }, { x: 47.8, y: 90.6 },
        { x: 53.1, y: 88.4 }, { x: 46.8, y: 89.9 }, { x: 50.3, y: 92.2 }, { x: 48.6, y: 87.8 }, { x: 51.5, y: 91.0 },
        { x: 49.0, y: 89.0 }, { x: 54.0, y: 88.6 }, { x: 47.2, y: 91.3 }, { x: 50.7, y: 86.7 }, { x: 46.5, y: 90.9 },
        { x: 53.5, y: 89.2 }, { x: 48.3, y: 92.7 }, { x: 51.0, y: 87.3 }, { x: 50.0, y: 88.1 }, { x: 47.7, y: 89.6 },
        { x: 52.2, y: 91.7 }, { x: 49.7, y: 87.0 }, { x: 53.3, y: 90.7 }, { x: 46.3, y: 88.3 }, { x: 51.7, y: 89.3 },
        { x: 48.8, y: 91.9 }, { x: 50.2, y: 88.9 }, { x: 49.3, y: 90.0 }, { x: 52.9, y: 88.7 }, { x: 47.9, y: 92.4 },
        // ... more aloe shape points
        // Central Leaf 1 (Tall)
        { x: 50.0, y: 87.3 }, { x: 50.1, y: 83.8 }, { x: 50.2, y: 79.9 }, { x: 50.3, y: 75.7 }, { x: 50.4, y: 71.3 },
        { x: 50.5, y: 66.7 }, { x: 50.6, y: 62.0 }, { x: 50.7, y: 57.3 }, { x: 50.7, y: 52.5 }, { x: 50.7, y: 47.8 },
        { x: 50.7, y: 43.2 }, { x: 50.6, y: 38.6 }, { x: 50.5, y: 34.1 }, { x: 50.4, y: 29.8 }, { x: 50.3, y: 25.6 },
        { x: 50.1, y: 21.5 }, { x: 50.0, y: 17.6 }, { x: 49.8, y: 14.0 }, { x: 49.6, y: 10.7 }, { x: 49.4, y: 7.8 },
        // ... more leaves and filler points
    ];

    // --- פונקציה ליצירת נקודות יעד ---
    function sampleImageAndCreatePoints() {
        try {
            const containerWidth = container.clientWidth;
            const containerHeight = container.clientHeight;

            if (containerWidth === 0 || containerHeight === 0) {
                console.error("שגיאה: לא ניתן לקבל מידות של הקונטיינר.");
                setTimeout(sampleImageAndCreatePoints, 200);
                return;
            }

            // שימוש בנקודות המוגדרות מראש
            targetPoints = aloeShapePoints;

            console.log(`נוצרו ${targetPoints.length} נקודות יעד.`);

            // כעת, לאחר שיש נקודות יעד, צור את המילים והתחל את התהליך
            setupAnimation();

        } catch (e) {
            console.error("שגיאה ביצירת נקודות:", e);
        }
    }

    // --- פונקציה להגדרת האנימציה (יצירת מילים ותזמון איסוף) ---
    function setupAnimation() {
        createWords();
        // המתן קצת לפני תחילת האיסוף
        setTimeout(gatherAndReveal, 3000); // המתן 3 שניות
    }

    // --- יצירת המילים במיקום התחלתי ---
    function createWords() {
        const containerWidth = container.clientWidth;
        const containerHeight = container.clientHeight;

        if (containerWidth === 0 || containerHeight === 0) {
            console.warn("מידות קונטיינר 0 ביצירת מילים, ממתין...");
            setTimeout(createWords, 100);
            return;
        }

        container.querySelectorAll('.word').forEach(el => el.remove()); // נקה מילים קודמות
        wordElements.length = 0;

        for (let i = 0; i < numWords; i++) {
            const wordElement = document.createElement('span');
            wordElement.classList.add('word');
            wordElement.textContent = words[Math.floor(Math.random() * words.length)];

            // גודל פונט אקראי קטן
            const initialSize = 8 + Math.random() * 6; // 8px - 14px
            wordElement.style.fontSize = `${initialSize}px`;

            wordElement.style.opacity = '0';
            // מיקום התחלתי מחוץ לקונטיינר (או בקצה)
            const angle = Math.random() * Math.PI * 2;
            const radius = Math.max(containerWidth, containerHeight) * (0.6 + Math.random() * 0.5);
            const startX = containerWidth / 2 + Math.cos(angle) * radius;
            const startY = containerHeight / 2 + Math.sin(angle) * radius;
            wordElement.style.transform = `translate(${startX}px, ${startY}px) scale(0.5)`; // התחל רחוק וקטן

            container.appendChild(wordElement);
            wordElements.push(wordElement);

            // הפעלה מושהית של הופעה ראשונית (תנועה קלה פנימה)
            setTimeout(() => {
                try {
                    wordElement.style.opacity = '1';
                    // תנועה קלה לכיוון המרכז וגדילה
                    const intermediateX = containerWidth / 2 + (Math.random() - 0.5) * containerWidth * 0.8;
                    const intermediateY = containerHeight / 2 + (Math.random() - 0.5) * containerHeight * 0.8;
                    wordElement.style.transform = `translate(${intermediateX}px, ${intermediateY}px) scale(1)`;
                } catch (e) { console.error("שגיאה בהופעה ראשונית:", e); }
            }, 50 + Math.random() * 1500);
        }
    }

    // --- איסוף המילים לצורה הסופית ---
    function gatherAndReveal() {
        const containerWidth = container.clientWidth;
        const containerHeight = container.clientHeight;

        if (containerWidth === 0 || containerHeight === 0 || targetPoints.length === 0 || wordElements.length === 0) {
            console.error("שגיאה: חסרים נתונים חיוניים לאיסוף.");
            setTimeout(gatherAndReveal, 500);
            return;
        }

        console.log("מתחיל איסוף...");

        // הצג את תמונת האלוורה אחרי שהמילים מתחילות להתאסף
        const aloeImage = document.getElementById('aloe-image');
        if (aloeImage) {
            setTimeout(() => {
                aloeImage.style.opacity = '0.7'; // הופעה הדרגתית של התמונה
            }, 1000);
        }

        wordElements.forEach((wordElement, index) => {
            try {
                // בחירת נקודת יעד מהמערך (עם חזרה)
                const targetPoint = targetPoints[index % targetPoints.length];

                const jitterX = (Math.random() - 0.5) * 5; // רעש קטן יותר
                const jitterY = (Math.random() - 0.5) * 5;

                // חישוב מיקום פיקסלי סופי בתוך הקונטיינר
                let targetX = (targetPoint.x / 100) * containerWidth + jitterX;
                let targetY = (targetPoint.y / 100) * containerHeight + jitterY;

                // הגבלת קואורדינטות (ליתר ביטחון)
                targetX = Math.max(0, Math.min(targetX, containerWidth - (wordElement.offsetWidth || 10)));
                targetY = Math.max(0, Math.min(targetY, containerHeight - (wordElement.offsetHeight || 10)));

                const finalScale = 0.6 + Math.random() * 0.3; // סקלה סופית קטנה יותר

                // החלת מיקום, סקלה ואולי שינוי צבע/שקיפות
                wordElement.style.transform = `translate(${targetX}px, ${targetY}px) scale(${finalScale})`;
                wordElement.style.color = '#e0ffe0'; // צבע ירוק בהיר מאוד, כמעט לבן
                wordElement.style.opacity = '0.8'; // אפשר להוריד שקיפות מעט בסוף

            } catch (e) {
                console.error("שגיאה בעיבוד מילה באיסוף:", e, wordElement, index);
            }
        });
    }

    // --- התחלת התהליך ---
    sampleImageAndCreatePoints();

    // --- עדכון בשינוי גודל חלון ---
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            console.log("Window resized, recalculating...");
            if (targetPoints.length > 0) {
                setupAnimation();
            } else {
                console.warn("שינוי גודל חלון, אך אין נקודות יעד עדיין.");
            }
        }, 500);
    });
} 