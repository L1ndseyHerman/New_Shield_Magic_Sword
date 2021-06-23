function TopTextLocalStorage()
{
    return(
        <div>
            <p>
                Whoops, I've been saving the playerOneHealth, computerHealth, and lastComputerChoice
                as LocalStorage, which I just realized is kind of like a Cookie. 
                I changed the game to use SessionStorage instead, which
                means the data will be deleted as soon as you close the web browser. 
                I also wrote code to delete existing LocalStorage from this site. My bad.
            </p>
        </div>
    );
}

export default TopTextLocalStorage; 