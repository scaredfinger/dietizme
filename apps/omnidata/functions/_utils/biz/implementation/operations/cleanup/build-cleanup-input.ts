import { Cleanup_Input, Preload_CleanupQuery } from '../../../../generated'
import { OperationRequest } from '@otiuming/biz-builder'

export function buildCleanupInput(
  request: OperationRequest<Cleanup_Input>,
  context: Preload_CleanupQuery
) {
  return {
    organization_id: request.body.organization_id,
    business_model_id: context.organization_by_pk.business_model_id,
    venueFacilities: context.organization_by_pk.venues.flatMap((v) =>
      v.facilities.map((f) => f.id)
    ),
    galleryItems: context.organization_by_pk.venues.flatMap((v) =>
      v.gallery.items.map((f) => f.id)
    ),
    galleries: context.organization_by_pk.venues.map((v) => v.gallery.id),
    venueUspsLines: context.organization_by_pk.venues.flatMap((v) =>
      v.usps.lines.map((f) => f.id)
    ),
    venueUsps: context.organization_by_pk.venues.map((v) => v.usps.id),
    venues: context.organization_by_pk.venues.map((v) => v.id),
    places: context.organization_by_pk.venues.map((p) => p.place_id),
    products: context.organization_by_pk.products.map((p) => p.id),
    product_business_models: context.organization_by_pk.products.map(p => p.business_model_id).filter(Boolean),
    productGalleryItems: context.organization_by_pk.products.flatMap((p) =>
      p.gallery.items.map((f) => f.id)
    ),
    productGalleries: context.organization_by_pk.products.map(
      (p) => p.gallery.id
    ),
    sites: context.organization_by_pk.sites.map((s) => s.id),
    my_web_sections: context.my_web_section.map((s) => s.section_id),
    branding_id: context.organization_by_pk.branding.id,
    socials_id: context.organization_by_pk.socials.id,
    rates: context.organization_by_pk.products.flatMap(p => p.rates.map((r) => r.id)),
    price_ranges: context.organization_by_pk.products.flatMap(p => p.rates.flatMap((r) => r.price_calendar.map((c) => c.id))),
    texts: [
      context.organization_by_pk.headline_id,
      context.organization_by_pk.branding.meta_title_id,
      context.organization_by_pk.branding.meta_description_id,

      ...context.organization_by_pk.venues.flatMap((v) => v.good_to_know_id),
      ...context.organization_by_pk.venues.flatMap((v) => v.description_id),

      ...context.organization_by_pk.venues.flatMap((v) =>
        v.facilities.map((f) => f.name_id)
      ),
      ...context.organization_by_pk.venues.flatMap((v) =>
        v.facilities.map((f) => f.headline_id)
      ),

      ...context.organization_by_pk.venues.flatMap((v) =>
        v.usps.lines.map((f) => f.name_id)
      ),
      ...context.organization_by_pk.venues.flatMap((v) =>
        v.usps.lines.map((f) => f.headline_id)
      ),

      ...context.organization_by_pk.venues.flatMap(v => v.gallery.name_id),
      ...context.organization_by_pk.venues.flatMap(v => v.gallery.headline_id),

      ...context.organization_by_pk.venues.flatMap((v) =>
        v.gallery.items.map((f) => f.name_id)
      ),
      ...context.organization_by_pk.venues.flatMap((v) =>
        v.gallery.items.map((f) => f.headline_id)
      ),

      ...context.organization_by_pk.products.flatMap(p => p.name_id),
      ...context.organization_by_pk.products.flatMap(p => p.headline_id),
      ...context.organization_by_pk.products.flatMap(p => p.description_id),

      ...context.organization_by_pk.products.flatMap(p => p.gallery.name_id),
      ...context.organization_by_pk.products.flatMap(p => p.gallery.headline_id),
      ...context.organization_by_pk.products.flatMap(p => p.gallery.items.map((f) => f.name_id)),
      ...context.organization_by_pk.products.flatMap(p => p.gallery.items.map((f) => f.headline_id)),      

      ...context.organization_by_pk.products.flatMap((p) =>
        p.gallery.items.map((f) => f.name_id)
      ),
      ...context.organization_by_pk.products.flatMap((p) =>
        p.gallery.items.map((f) => f.headline_id)
      ),

      ...context.organization_by_pk.products.map((p) => p.gallery.name_id),
      ...context.organization_by_pk.products.map((p) => p.gallery.headline_id),

      ...context.organization_by_pk.products.flatMap(p => p.rates.map((r) => r.name_id)),
      ...context.organization_by_pk.products.flatMap(p => p.rates.map((r) => r.headline_id)),

      ...context.organization_by_pk.product_groups.flatMap((p) => p.name_id),
      ...context.organization_by_pk.product_groups.flatMap((p) => p.headline_id),
      ...context.organization_by_pk.product_groups.flatMap((p) => p.description_id),

      ...context.organization_by_pk.features.flatMap((f) => f.name_id),
      ...context.organization_by_pk.features.flatMap((f) => f.headline_id),

      ...context.organization_by_pk.booking_questions.flatMap((q) => q.text_id),
    ].filter(Boolean),
    slugs: [
      ...context.organization_by_pk.venues.flatMap(v => v.facilities.map(f => f.slug_id)),
      ...context.organization_by_pk.products.map(p => p.slug_id),
      ...context.organization_by_pk.product_groups.map(pg => pg.slug_id),
    ],
  }
}

// TODO: missing deletes
// x delete rate calendar
// xt delete rate
// x delete product_product_groups
// xt delete product groups
// xt delete products
// x delete feature_category
// xt delete feature
// xt delete booking_questions 
// xt delete rate_headline
// xt delete rate_name
// delete slug
// some text and images