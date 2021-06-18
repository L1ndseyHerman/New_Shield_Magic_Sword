function BottomNotes()
{
    //  For some reason, this always gets the current time, maybe because of how React works?
    //var lastModified = document.lastModified;
    //  Doesn't do anything:
    //var lastModified = File.lastModified;

    return(
        <div>
            <p>
                Starting Version 2.2, which will be fixing mistakes. After watching TechWithTim's 
                first eight ReactJS videos on YouTube, the first of which
                is <a href="https://www.youtube.com/watch?v=Ma6DRDIedVE&t=1s">Here</a>, I realized
                I am not creating multiple React components the way I should be, so I will be
                fixing that. If you are a software developer who wants to look at 
                previous versions, you can go to
                my <a href="https://github.com/L1ndseyHerman/New_Shield_Magic_Sword/">
                GitHub</a>, change the branch from &quot;master&quot; to the version you are looking for,
                and run the code in VS Code.</p>
            <p>And check out <a href="https://l1ndseyherman.github.io/">My Other Website</a>.</p>
            <footer>This is a React JS Progressive Web App. Updated 06/18/21</footer>
        </div>
    );
}

export default BottomNotes;