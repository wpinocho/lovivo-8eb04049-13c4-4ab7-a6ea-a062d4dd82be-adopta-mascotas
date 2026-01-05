export const BrandLogoLeft = () => {
  return (
    <a href="/" aria-label="Home" className="ml-2 flex items-center">
      {/* TEMPLATE: Replace /logo.svg with your brand logo */}
      <img 
        src="/logo.svg" 
        alt="Paws & Hearts Adoption"
        className="h-10 w-auto object-contain" 
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          e.currentTarget.parentElement!.innerHTML = '<span class="text-2xl font-bold text-primary">🐾 Paws & Hearts</span>';
        }}
      />
    </a>
  )
}