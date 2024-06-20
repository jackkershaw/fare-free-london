// Frontpage.js

export default function Frontpage() {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div>
          <p className="text-2xl">
            We are a campaign for free public transport in London. Our
            organisation brings together community groups, trade
            unions, environmentalists and others who see free public
            transport as central to our vision of the London in which
            we want to live.
          </p>
          <div className="flex flex-col">
            <h1 className="text-3xl py-5">What We Stand For</h1>
            <h2 className="text-2xl mb-1">Opens the City To All</h2>
            <p className="mb-4">
              It is provided as a public service, just like health,
              education and public parks, and is supported by public
              investment. It is central to a vision of London as a city
              where people, their health and the lives they live, come
              first.
            </p>
            <h2 className="text-2xl font-bold mb-1">Socially Just</h2>
            <p className="mb-4">
              Free public transport is socially just, supporting the
              lowest-income families that are least likely to have a
              car. It is better transport, underpinned by substantial
              investment, with a secure, properly-rewarded workforce.
              It is one of the drastic, demonstrative actions needed to
              tackle climate change globally and air pollution locally.
            </p>
            <h2 className="text-2xl font-bold mb-1">
              Model exists in 100+ cities globally
            </h2>
            <p className="mb-4">
              Public transport is already free in many smaller cities,
              including Luxemburg, Tallinn (Estonia), Montpellier and
              Dunkerque (France) and Albuquerque and Kansas City (USA).
              London can be the first big global city to follow their
              example.
            </p>
            <p>
              We call on the Mayor and the Greater London Authority
              (GLA) to provide free public transport in London. The
              first step is to research ways to implement it. We call
              on national government to support free public transport
              in London, and around the country. The local government
              finance rules need to be changed, so that local
              authorities can raise money for it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
