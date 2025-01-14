import { FormattedCurrentDay } from "@/domain/common/utils/date/formatted-current-day.util"
import { WelcomeDate } from "@/domain/common/utils/date/welcome-date.util"
import { MaxWidthWrapper } from "@/domain/shared/components/max-width-wrapper"
import CreateTaskButton from "@/domain/subdomain/home/create-button/presentation-create-button"
import SmartTask from "@/domain/subdomain/home/task/smart-task"


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center w-full ">
      <MaxWidthWrapper className="items-center flex ">
        <div className="m-auto mt-10 flex flex-col">
          <div className="space-y-1">
            <h1 className="text-lg md:text-xl font-bold">
              {WelcomeDate()} Qual sua tarefa para hoje?
              <span className="font-emoji">👋</span>
            </h1>
            <span className="flex justify-between items-center max-w-lg">
              <h2 className="text-base md:text-lg font-sans font-light">
                {FormattedCurrentDay()}
              </h2>
              <CreateTaskButton />
            </span>
          </div>

          <section className="my-4 space-y-2">
            <SmartTask />
          </section>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}
