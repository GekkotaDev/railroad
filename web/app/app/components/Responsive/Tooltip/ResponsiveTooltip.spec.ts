// @vitest-environment nuxt

import { renderSuspended } from "@nuxt/test-utils/runtime"
import { fireEvent, screen } from "@testing-library/vue"

import { ResponsiveTooltip, UiButton } from "#components"
import { html } from "~/mocks/html"

describe("<ResponsiveTooltip /> component", () => {
  it("is rendered as a Drawer on mobile", async () => {
    const label = html`Heading`
    const device = {
      isDesktop: false,
      isMobile: true,
    }

    const button = await renderSuspended(UiButton, {
      slots: {
        default: () => html`Open`,
      },
    })

    await renderSuspended(ResponsiveTooltip, {
      props: {
        device,
        label,
      },
      slots: {
        default: () => html`<p>Additional information.</p>`,
        trigger: {
          template: button.html(),
        },
      },
    })

    // Locate the tooltip's trigger.
    const trigger = screen.getByText("Open")

    await fireEvent.click(trigger)

    // Find the drawer label.
    expect(screen.getByText("Heading")).toBeDefined()
  })

  it("is rendered as a Tooltip on desktop", async () => {
    const label = html`Heading`
    const device = {
      isDesktop: true,
      isMobile: false,
    }

    const button = await renderSuspended(UiButton, {
      slots: {
        default: () => html`Open`,
      },
    })

    await renderSuspended(ResponsiveTooltip, {
      props: {
        device,
        label,
      },
      slots: {
        default: {
          template: html`<p>Additional information.</p>`,
        },
        trigger: {
          template: button.html(),
        },
      },
    })

    // Locate the tooltip's trigger.
    const trigger = screen.getByText("Open")

    await fireEvent.click(trigger)

    // The drawer label should not be present.
    expect(screen.queryByText("Heading")).toBeNull()
  })
})
