import React from "react";
import './Movies.css';

const Movies =() => {
    const myMovies = { color: "White" };
    return (
        <>
        <div className="card=container">
            <div className="card">
                <div className="card-body">
                    <span className="card-number card-circle subtle">1</span>
                    <span className="card-author subtle" style={{myMovies}}>Movies</span>
                    <img src={"https://www.google.com/search?sa=X&sca_esv=573870793&rlz=1C1CHBF_enIN1019IN1019&sxsrf=AM9HkKkurMGg734pNF72AyujmOFpFwJe0A:1697483309481&q=Gadar+2&stick=H4sIAAAAAAAAAE1TS47UMBRUI3UzakBCMwskVogD0LGT2MlIrFnNGaKOM3HGcTyOn5W0fQrEEVizmGvAAViyYMcNWPIZ5aWX5ZeqctVzLrZvXxzkgRAIROt2KOhuuJ_ubuHb5vHc5yFvIQTEpB5L7-KCgcB4Snu54F6QsvCG4Dw481cjrPjRZ8G2H1KqwoBzC96wfPWnfoZo0W8qddf0abfgsZiqJI_Duf7MYcW1rEStaryfDdN8ypMFK1LbMiZrnqmUsWZuwS60bITokT9SC2aczvV5aQx-Ly1IOfeoL_Rgq1bgHFxLxxb9TZh0yRv0E0MiZJohv-PEAOMU--BedWU1I__ktA6On-f3ocoWrLOZFkJVODcuY3mWn-fzTQtn-l1Ma9Qby3bKSo15FUTp-gb7BGc0T0bkqyyklQa8vw9MNtLztR8SZCoxP4ipGboG9wmDqgfVYz7ITtpxhf11lrDchRPmT5mgTVz3AU65aC2-L55UPUSG74cUmaYU92UI6wlb--lqORazgpVf5p6PyIdIWVEX7c_N-2cvf_3-cfU6-_Tl6_fNu_2rXlwfhtvm7ng9d0df-ftqPnrRXV7ttzf_ji_3lxf73c3_3-v55-3TD8fm6N7Qh-2Tj7vNH0ohn4iJAwAA&ved=2ahUKEwjRxbGNovuBAxXHQPUHHVvaB34Q-BZ6BAgfEBQ&biw=1280&bih=563&dpr=1.5"} 
                    alt ="image" className="card-media" />
                </div>
            </div>
        </div>
        </>
    );
};

export default Movies;