//Conditional Rendering
// if-else
// Ternary Operator
// &&


// function Header(){
//     const isLogin = true;

//     if(isLogin){
//         return(
//             <header>
//             <button>Dashbord</button>
//             </header>

//         )
//     } else {
//         return(
//             <header>
//                 <button>Login</button>
//             </header>
//         )
//     }

// }


function Header(){
    const isLogin = true;

    return(
        <header>
         {/* {isLogin ? <button>Dashborad</button> : <button>Login</button>} */}
         {/* {isLogin ? (
            <div>
                <button>Dashborad</button>
                <button>Basket</button>
            </div>
         ) :
         (
            <button>Login</button>
         )} */}

         {isLogin ? (
            <div>
                <button>DashBord</button>
            </div>
         ) : (
            <button>Login</button>
         )}
         {isLogin && <button>cart</button>}

        </header>
    );
}
export default Header