import ArrowRightSVG from "@/assets/icons/arrow-right"
import Box from "./box"
import Text from './text'
import { Link, type Href } from "expo-router"
import { Pressable } from "react-native"

type CardLinkProps = {
    href: Href<string>;
    title: string;
}

export default function CardLink(props: CardLinkProps) {
    return (
        <Link href={props.href} asChild>
            <Pressable>
              <Box
                borderWidth={1}
                borderColor="border"
                borderRadius={16}
                width="100%"
                py="default"
                px="m"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Text variant="h3" font='Manrope-Regular'>
                  {props.title}
                </Text>
                <ArrowRightSVG />
              </Box>
            </Pressable>
          </Link>
    )
}