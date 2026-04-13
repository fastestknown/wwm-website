import {
  Hero,
  Section,
  SectionHeader,
  TwoColumn,
  AudienceCard,
  Steps,
  QuoteBlock,
  NewsletterSignup,
} from "@/components/sections";
import { Button, StatCard, TestimonialCard, Card } from "@/components/ui";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        headline="Your next great hire is already trusted by someone you trust."
        subhead="Work With Meaning connects business owners with vetted fractional leaders through relationships, not resumes. We've built the trust infrastructure so you don't have to start from scratch."
        primaryCTA={{
          text: "Get Introduced to a Leader",
          href: "/contact",
        }}
        secondaryCTA={{
          text: "I'm a Fractional Leader",
          href: "/for-fractional-leaders",
        }}
      />

      {/* Who This Is For */}
      <Section variant="clay">
        <SectionHeader title="Two sides of the same problem" />
        <TwoColumn
          left={
            <AudienceCard
              title="Business Owners"
              description="You've outgrown your current team's capacity, but you're not ready for a full-time executive hire. You need strategic leadership, not another contractor. And you're tired of gambling on LinkedIn profiles and recruiter promises. You want someone who's already been vouched for. Someone who fits your culture, not just your job description."
              ctaText="Learn how we find leaders for you"
              ctaHref="/for-business-owners"
            />
          }
          right={
            <AudienceCard
              title="Fractional Leaders"
              description="You've built something real: decades of experience, a track record of results, the wisdom to know what actually works. But finding the right clients? That still feels like starting over every time. You want introductions that respect your time. Relationships that compound. A community that gets what you do."
              ctaText="See if you're a fit"
              ctaHref="/for-fractional-leaders"
            />
          }
        />
      </Section>

      {/* The Problem WWM Solves */}
      <Section>
        <SectionHeader
          title="Professional networks look impressive on paper. They fail when you actually need help."
        />
        <div className="max-w-[720px] mx-auto space-y-6">
          <p className="text-lg text-[var(--trust-blue)]">
            You've got 500+ connections. You've been to the conferences. You've
            collected the business cards.
          </p>
          <p className="text-lg text-[var(--trust-blue)]">
            And when you really need someone you can trust? You're still
            cold-searching, still asking around, still hoping the next referral
            doesn't waste three months.
          </p>
          <p className="text-lg text-[var(--trust-blue)]">
            Here's what we've learned from hundreds of conversations with
            business owners and fractional leaders:
          </p>
          <QuoteBlock quote="The real problem isn't finding people. It's finding people you can trust, quickly, when it matters." />
          <p className="text-lg text-[var(--trust-blue)]">
            Most platforms solve for volume. They give you more profiles, more
            matches, more noise.
          </p>
          <p className="text-lg text-[var(--trust-blue)] font-medium">
            We solve for trust. We give you fewer introductions, but ones that
            actually work.
          </p>
        </div>
      </Section>

      {/* The WWM Difference */}
      <Section variant="dark">
        <SectionHeader
          title="Trust beats transactions. Every time."
          variant="dark"
        />
        <TwoColumn
          variant="wide-right"
          left={
            <div>
              <h3 className="text-xl font-semibold text-[var(--off-white)] mb-6">
                What we're not:
              </h3>
              <ul className="space-y-3">
                {[
                  "A staffing agency",
                  "A gig marketplace",
                  "A matching algorithm",
                  "A networking group",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[var(--teal-sage)]" />
                    <span className="text-[var(--off-white)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          }
          right={
            <div>
              <h3 className="text-xl font-semibold text-[var(--off-white)] mb-6">
                What we are:
              </h3>
              <p className="text-lg text-[var(--off-white)]/90 mb-4">
                A trust-based ecosystem where business owners find proven
                fractional leaders through relationships that already exist.
              </p>
              <p className="text-lg text-[var(--off-white)]/90 mb-4">
                Every leader in our community has been vetted through
                conversation, not just credentials. Every introduction comes
                with context. Every relationship is designed to last longer than
                a single project.
              </p>
              <p className="text-lg text-[var(--off-white)]/90">
                We're building the infrastructure that makes trust a business
                advantage, not a lucky accident.
              </p>
            </div>
          }
        />
      </Section>

      {/* How It Works */}
      <Section>
        <SectionHeader title="The simplest version" />
        <Steps
          steps={[
            {
              title: "We get to know you",
              description:
                "A real conversation. Not a form. We learn what you actually need, not just what the job posting says.",
            },
            {
              title: "We find the right fit",
              description:
                "Our team (humans, supported by smart tools) identifies leaders who match your situation, your culture, and your budget.",
            },
            {
              title: "We make the introduction",
              description:
                "You meet someone who's already been vouched for. No cold pitches. No guessing.",
            },
            {
              title: "The relationship grows",
              description:
                "We stay in the background, helping both sides nurture the relationship over time. Not micromanaging. Just supporting.",
            },
          ]}
        />
        <div className="text-center mt-12">
          <Button href="/how-it-works" variant="text" arrow>
            See the full process
          </Button>
        </div>
      </Section>

      {/* Social Proof */}
      <Section variant="clay">
        <SectionHeader title="What people say" />
        <div className="max-w-[720px] mx-auto mb-12">
          <TestimonialCard
            quote="I felt like I just went to my high school reunion where everyone cared about me and were excited to see each other."
            attribution="WWM Event Attendee"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard value="350+" label="intake conversations" />
          <StatCard value="94%" label="say community is their #1 need" />
          <StatCard value="70" label="showed up to our first event" />
        </div>
      </Section>

      {/* Clear Next Steps */}
      <Section>
        <SectionHeader title="Where do you want to start?" />
        <TwoColumn
          left={
            <Card variant="dark">
              <h3 className="font-heading text-2xl text-[var(--off-white)] mb-4">
                For Business Owners
              </h3>
              <p className="text-[var(--off-white)]/90 mb-6">
                Tell us what you're working on. We'll have a real conversation
                about whether fractional leadership makes sense for your
                situation. No pitch. No pressure.
              </p>
              <Button href="/contact">Get Introduced to a Leader</Button>
            </Card>
          }
          right={
            <Card variant="dark">
              <h3 className="font-heading text-2xl text-[var(--off-white)] mb-4">
                For Fractional Leaders
              </h3>
              <p className="text-[var(--off-white)]/90 mb-6">
                If you're serious about building a practice rooted in
                relationships, not cold outreach, we'd like to meet you. We're
                selective, but we're also generous with our time.
              </p>
              <Button href="/for-fractional-leaders" variant="accent">
                Apply to Join the Community
              </Button>
            </Card>
          }
        />
      </Section>

      {/* Newsletter Signup */}
      <Section variant="clay">
        <NewsletterSignup />
      </Section>

      {/* Footer CTA */}
      <Section variant="clay" padding="default">
        <div className="text-center">
          <p className="text-lg text-[var(--trust-blue)]">
            Questions? Just want to talk?{" "}
            <a
              href="/contact"
              className="text-[var(--teal-sage)] hover:underline"
            >
              Reach out directly
            </a>
          </p>
        </div>
      </Section>
    </>
  );
}
