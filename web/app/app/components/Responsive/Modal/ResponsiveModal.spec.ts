// @vitest-environment nuxt

import { renderSuspended } from "@nuxt/test-utils/runtime"
import { fireEvent, screen } from "@testing-library/vue"

import { ResponsiveModal, UiButton } from "#components"
import { html } from "~/mocks/html"

describe("<ResponsiveModal /> component", () => {
  it("renders as drawer on mobile", async () => {
    const title = html`Title`
    const description = html`Lorem ipsum`
    const device = {
      isDesktop: false,
      isMobile: true,
    }

    const button = await renderSuspended(UiButton, {
      slots: {
        default: () => html`Open`,
      },
    })

    await renderSuspended(ResponsiveModal, {
      props: {
        device,
        description,
        title,
      },
      slots: {
        trigger: button.html(),
      },
    })

    // Locate the tooltip's trigger.
    const trigger = screen.getByText("Open")

    await fireEvent.click(trigger)

    // Cancel button should only be present on mobile.
    expect(screen.queryByText("Cancel")).toBeDefined()
  })

  it("renders as dialog on desktop", async () => {
    const title = html`Title`
    const description = html`Lorem ipsum`
    const device = {
      isDesktop: true,
      isMobile: false,
    }

    const button = await renderSuspended(UiButton, {
      slots: {
        default: () => html`Open`,
      },
    })

    await renderSuspended(ResponsiveModal, {
      props: {
        device,
        description,
        title,
      },
      slots: {
        trigger: button.html(),
      },
    })

    // Locate the tooltip's trigger.
    const trigger = screen.getByText("Open")

    await fireEvent.click(trigger)

    // Cancel button should be absent on desktop.
    expect(screen.queryByText("Cancel")).toBeNull()
  })
})
