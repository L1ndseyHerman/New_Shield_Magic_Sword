function BottomNotes()
{
    //  For some reason, this always gets the current time, maybe because of how React works?
    //var lastModified = document.lastModified;
    //  Doesn't do anything:
    //var lastModified = File.lastModified;

    return(
        <div>
            <p>
                Done with Version 2.3, which is adding a title screen of sorts, so you 
                don&#39;t have to look at this giant wall of text while playing the game.
            </p>
            <p>
                If you are a software developer who wants to look at 
                previous versions, you can go to
                my <a href="https://github.com/L1ndseyHerman/New_Shield_Magic_Sword/">
                GitHub</a>, change the branch from &quot;master&quot; to the version 
                you are looking for, then pull the code and run it in VS Code.
            </p><p>    
                I'd also like to shout out Tech With Tim's 
                first ten ReactJS videos on YouTube, the first of which
                is <a href="https://www.youtube.com/watch?v=Ma6DRDIedVE&t=1s">Here</a>,  
                for being a great ReactJS learning resource. Tim's series is in-progress,
                so there will eventually be more than ten videos.
            </p>
            <p>And check out <a href="https://l1ndseyherman.github.io/">My Other Website</a>.</p>
            <footer>This is a React JS Progressive Web App. Updated 06/22/21</footer>
        </div>
    );
}

export default BottomNotes;