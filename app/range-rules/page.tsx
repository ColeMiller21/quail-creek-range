import type { Metadata } from "next"
import { AlertTriangle } from "lucide-react"

export const metadata: Metadata = {
  title: "Range Rules | Quail Creek Range",
  description:
    "Safety rules and regulations for Quail Creek Range. Learn about gun safety, cease fire procedures, shooting bench rules, and open carry policies.",
}

export default function RangeRulesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-[#4a5d3f]">
        <div className="absolute inset-0 bg-black/40" />
        <div className="container mx-auto px-4 text-center relative z-10 pt-32">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Range Rules</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">Safety is Our First Concern</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Safety Alert */}
          <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-lg mb-12 flex gap-4">
            <AlertTriangle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Safety is Our First Concern</h2>
              <p className="text-muted-foreground">
                All visitors must follow these rules and obey all Range Officers commands immediately. Failure to follow
                QCR rules may result in loss of range privileges.
              </p>
            </div>
          </div>

          {/* Gun Safety */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6 pb-3 border-b-2 border-accent">Gun Safety</h2>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-accent font-bold flex-shrink-0">•</span>
                <span>Always treat all firearms, as if they are loaded.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold flex-shrink-0">•</span>
                <span>Bring guns and magazines to the range empty.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold flex-shrink-0">•</span>
                <span>
                  Check in with Range Master after crossing the bridge. Range Officers will assign your shooting
                  position.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold flex-shrink-0">•</span>
                <span>
                  No Full Metal Jacket (FMJ) center fire RIFLE ammo on the range at QCR. FMJ Pistol ammo is okay.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold flex-shrink-0">•</span>
                <span>Shotguns may be used on the Rifle 25 or 50 yard line, Slugs only for shotgun use.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold flex-shrink-0">•</span>
                <span>Range officer may ask to check your ammunition at any time.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold flex-shrink-0">•</span>
                <span>Carry uncased firearms with the muzzles straight up with the action open.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold flex-shrink-0">•</span>
                <span className="font-bold text-foreground uppercase">
                  Never point the muzzle at anyone or anything you do not wish to destroy.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold flex-shrink-0">•</span>
                <span>Always keep your finger OFF the trigger until ready to fire.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold flex-shrink-0">•</span>
                <span>
                  Minors must be closely supervised by an adult at all times, and must be 4'6" (54") tall to shoot
                  handguns.
                </span>
              </li>
            </ul>
          </div>

          {/* Cease Fire Rules */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6 pb-3 border-b-2 border-accent">
              QCR Cease Fire Rules
            </h2>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-accent font-bold flex-shrink-0">•</span>
                <span>
                  Range Master will call cease fires at regular timed intervals to allow you to check your target and
                  put up new targets.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold flex-shrink-0">•</span>
                <span>
                  When a cease fire is called, unload your firearms, lock all actions open, keep the muzzle pointed down
                  range and step back behind the firing line. Take anything you might need downrange (staple guns,
                  targets, markers) with you when you leave the bench.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold flex-shrink-0">•</span>
                <span>
                  While the range is COLD do not approach the shooting bench, or touch any firearms until the range is
                  called HOT.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold flex-shrink-0">•</span>
                <span>
                  Unless going down range do not cross red line during cease fire or handle any firearms behind the
                  line.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold flex-shrink-0">•</span>
                <span>
                  Ask the Range Officers for assistance if you must go back to the firing position during a cease fire.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold flex-shrink-0">•</span>
                <span>
                  If an EMERGENCY CEASE FIRE is called, immediately place firearms on the bench and step behind the red
                  line. DO NOT GO DOWN RANGE! Do not unload your firearms.
                </span>
              </li>
            </ul>
          </div>

          {/* At the Shooting Bench */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6 pb-3 border-b-2 border-accent">
              At the Shooting Bench
            </h2>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-accent font-bold flex-shrink-0">•</span>
                <span>
                  Case and un-case all firearms at the shooting bench. Keep muzzles pointed down range at all times.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold flex-shrink-0">•</span>
                <span>When at the firing line keep all firearms pointed in a safe direction at all times.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold flex-shrink-0">•</span>
                <span>
                  Keep muzzle below the top of the berm when on the firing line. Do not wave muzzles in the air while
                  working on firearms or cycling actions.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold flex-shrink-0">•</span>
                <span>Do not place anything on concrete between red line and firing line. Use shelves or tables.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold flex-shrink-0">•</span>
                <span>Shoot at paper targets only. Never shoot any range fixtures or supports.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold flex-shrink-0">•</span>
                <span>Shooting high or low will result in your being moved to a shorter distance.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold flex-shrink-0">•</span>
                <span>Do not rapid fire. Allow two seconds between shots.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold flex-shrink-0">•</span>
                <span>
                  Firearm must be equal to the shooters skills and abilities (caliber, size, action type, etc.).
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold flex-shrink-0">•</span>
                <span>Weapons must have sights or optics.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold flex-shrink-0">•</span>
                <span>Report any unsafe action to the Range Officer immediately! We need to know!</span>
              </li>
            </ul>
          </div>

          {/* Open Carry Rules */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6 pb-3 border-b-2 border-accent">Open Carry Rules</h2>
            <p className="text-muted-foreground mb-4">
              Open carry is allowed at our range. However, there are a few rules to follow:
            </p>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-accent font-bold flex-shrink-0">•</span>
                <span>
                  The firearm must stay holstered until you are on the firing line. Once at the line you may un-holster
                  the firearm and place it on the bench.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold flex-shrink-0">•</span>
                <span>No from holster work may be done while shooting. All shooting must be done from the bench.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold flex-shrink-0">•</span>
                <span>When done shooting for the day, you may then return the firearm to the holster.</span>
              </li>
            </ul>
          </div>

          {/* Final Warning */}
          <div className="bg-destructive/10 border-l-4 border-destructive p-6 rounded-lg">
            <p className="text-foreground font-bold text-center text-lg">
              Follow all safety rules and obey all Range Officers commands immediately.
            </p>
            <p className="text-muted-foreground text-center mt-2">
              Failure to follow QCR rules may result in loss of range privileges.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
