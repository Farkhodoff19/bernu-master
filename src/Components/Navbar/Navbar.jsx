import Navigation from "../Navigation/Navigation";
import Search from "../Search/Search";
import Social from "../Social/Social";

function Navbar() {
    return (
        <div className="bg-slate-200">
        <section className="flex items-center container">
            <Navigation/>
            <Search/>
            <Social/>
        </section>
        </div>
    )
}

export default Navbar