export const showSnackBar =(message: string, isSuccess:boolean, time: number) : void =>
{
    const snackBar = document.getElementById("snackBar") as HTMLElement | null;
    if (snackBar)
    {
        snackBar.textContent = message;
        snackBar.style.backgroundColor = isSuccess ? "#4CAF50" : "#f44336";
        snackBar.style.display = "block";
        snackBar.style.zIndex= "100";
        setTimeout(() => {
            snackBar.style.display = "none";
        },time);
    }
}