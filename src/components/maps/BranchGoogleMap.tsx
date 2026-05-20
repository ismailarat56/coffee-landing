import { MapPin } from 'lucide-react';
import type { Branch } from '../../types';
import { cn } from '../../lib/utils';

type BranchGoogleMapProps = {
  branches: Branch[];
  selectedBranch?: Branch | null;
  onSelectBranch?: (branch: Branch) => void;
  className?: string;
  fallbackTitle?: string;
  getInfoTitle?: (branch: Branch) => string;
};

const createEmbedUrl = (branch: Branch) => {
  const coordinates = `${branch.position.lat},${branch.position.lng}`;

  return `https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1s${coordinates}!6i13!3m1!1str!5m1!1str`;
};

export function BranchGoogleMap({
  branches,
  selectedBranch,
  onSelectBranch,
  className,
  fallbackTitle = 'Şube Haritası',
  getInfoTitle = (branch) => `${branch.city} Şubesi`,
}: BranchGoogleMapProps) {
  const activeBranch = selectedBranch ?? branches[0] ?? null;

  return (
    <div className={cn('relative min-h-[400px] w-full overflow-hidden rounded-[2.5rem] bg-cream-brand', className)}>
      {activeBranch ? (
        <>
          <iframe
            key={activeBranch.id}
            title={getInfoTitle(activeBranch)}
            src={createEmbedUrl(activeBranch)}
            className="h-full min-h-[400px] w-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />

          <div className="pointer-events-none absolute left-4 top-4 z-10 max-w-[calc(100%-2rem)] rounded-2xl bg-white/95 px-5 py-4 text-indigo-brand shadow-xl backdrop-blur-md">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gold-brand/10 text-gold-brand">
                <MapPin size={20} />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold leading-tight">{getInfoTitle(activeBranch)}</h3>
                <p className="mt-1 max-w-sm text-xs font-medium leading-relaxed text-indigo-brand/60">
                  {activeBranch.address}
                </p>
              </div>
            </div>
          </div>

          {branches.length > 1 && (
            <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-wrap justify-center gap-2">
              {branches.map((branch) => (
                <button
                  type="button"
                  key={branch.id}
                  onClick={() => onSelectBranch?.(branch)}
                  className={cn(
                    'rounded-full border px-4 py-2 text-xs font-black uppercase tracking-widest shadow-lg transition-all',
                    activeBranch.id === branch.id
                      ? 'border-gold-brand bg-gold-brand text-white'
                      : 'border-indigo-brand/10 bg-white/95 text-indigo-brand/70 hover:border-gold-brand/40 hover:text-indigo-brand'
                  )}
                >
                  {branch.city}
                </button>
              ))}
            </div>
          )}
        </>
      ) : (
        <div className="flex h-full min-h-[400px] flex-col items-center justify-center px-6 text-center">
          <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-gold-brand shadow-xl">
            <MapPin size={30} />
          </div>
          <h3 className="font-serif text-3xl font-bold text-indigo-brand">{fallbackTitle}</h3>
        </div>
      )}
    </div>
  );
}
